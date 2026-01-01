module.exports = async (req, res) => {
  try {
    const { username, repo } = req.query;

    // Validate required parameters
    if (!username || !repo) {
      return res.status(400).send(
        generateErrorSVG('Missing username or repo parameter')
      );
    }

    // Fetch repository data from GitHub API
    const apiUrl = `https://api.github.com/repos/${username}/${repo}`;
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Node.js'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).send(
          generateErrorSVG('Repository not found')
        );
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    // Extract relevant data
    const repoData = {
      name: data.name || 'Unknown',
      owner: data.owner?.login || username,
      description: data.description || 'No description available',
      stars: formatNumber(data.stargazers_count || 0),
      forks: formatNumber(data.forks_count || 0),
      watchers: formatNumber(data.watchers_count || 0),
      issues: formatNumber(data.open_issues_count || 0),
      language: data.language || 'N/A',
      license: data.license?.spdx_id || 'No license',
      updatedAt: formatDate(data.updated_at),
      size: formatSize(data.size || 0),
      isPrivate: data.private || false
    };

    // Generate and return SVG
    const svg = generateRepoSVG(repoData);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=1800'); // Cache for 30 minutes
    return res.status(200).send(svg);

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send(
      generateErrorSVG('Failed to fetch repository data')
    );
  }
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 1) return 'Updated today';
  if (diffDays === 1) return 'Updated yesterday';
  if (diffDays < 30) return `Updated ${diffDays} days ago`;
  if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} months ago`;
  return `Updated ${Math.floor(diffDays / 365)} years ago`;
}

function formatSize(kb) {
  if (kb >= 1024 * 1024) {
    return (kb / (1024 * 1024)).toFixed(1) + ' GB';
  }
  if (kb >= 1024) {
    return (kb / 1024).toFixed(1) + ' MB';
  }
  return kb + ' KB';
}

function generateRepoSVG(data) {
  const width = 400;
  const padding = 20;
  const lineHeight = 24;
  
  // Calculate description height (wrap text)
  const maxDescLength = 55;
  const descLines = wrapText(data.description, maxDescLength);
  const descHeight = descLines.length * lineHeight;
  
  // Calculate total height (added space for additional info)
  const height = padding * 2 + 30 + 10 + descHeight + 10 + 60;

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="transparent" rx="8"/>
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="#ffffff" stroke="#e1e4e8" stroke-width="1" rx="8"/>
  
  <!-- Owner Badge -->
  <rect x="${padding}" y="${padding}" width="auto" height="18" fill="#f6f8fa" rx="3"/>
  <text x="${padding + 6}" y="${padding + 13}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="500" fill="#57606a">
    ${escapeXml(data.owner)}
  </text>
  ${data.isPrivate ? `<rect x="${width - padding - 60}" y="${padding}" width="55" height="18" fill="#fff8c5" stroke="#d4a72c" stroke-width="1" rx="3"/>
  <text x="${width - padding - 54}" y="${padding + 13}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="500" fill="#9a6700">Private</text>` : ''}
  
  <!-- Repository Name -->
  <text x="${padding}" y="${padding + 48}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="20" font-weight="600" fill="#0969da">
    ${escapeXml(data.name)}
  </text>
  
  <!-- Description -->
  ${descLines.map((line, i) => `<text x="${padding}" y="${padding + 58 + 10 + (i * lineHeight)}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#57606a">${escapeXml(line)}</text>`).join('\n  ')}
  
  <!-- Stats Row 1 -->
  <g transform="translate(${padding}, ${height - padding - 45})">
    <!-- Language -->
    <circle cx="0" cy="-4" r="6" fill="#3178c6"/>
    <text x="12" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#57606a">
      ${escapeXml(data.language)}
    </text>
    
    <!-- Stars -->
    <g transform="translate(100, 0)">
      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" fill="#656d76" transform="translate(0, -8) scale(0.85)"/>
      <text x="16" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#57606a">
        ${escapeXml(data.stars)}
      </text>
    </g>
    
    <!-- Forks -->
    <g transform="translate(170, 0)">
      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="#656d76" transform="translate(0, -8) scale(0.85)"/>
      <text x="16" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#57606a">
        ${escapeXml(data.forks)}
      </text>
    </g>
    
    <!-- Watchers -->
    <g transform="translate(235, 0)">
      <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 010 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 010-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2zM1.679 7.932a.12.12 0 000 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 000-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717zM8 10a2 2 0 100-4 2 2 0 000 4z" fill="#656d76" transform="translate(0, -8) scale(0.85)"/>
      <text x="16" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#57606a">
        ${escapeXml(data.watchers)}
      </text>
    </g>
  </g>
  
  <!-- Stats Row 2 -->
  <g transform="translate(${padding}, ${height - padding - 20})">
    <!-- Issues -->
    <g>
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#656d76" transform="translate(0, -8) scale(0.85)"/>
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" fill="#656d76" transform="translate(0, -8) scale(0.85)"/>
      <text x="16" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#57606a">
        ${escapeXml(data.issues)} issues
      </text>
    </g>
    
    <!-- License -->
    <g transform="translate(110, 0)">
      <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 010 1.5h-.427l2.111 4.692a.75.75 0 01-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 01-2.023-.454 3.544 3.544 0 01-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 01-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 00-.124-.033H8.75V13h2.5a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5h2.5V3.5h-.984a.245.245 0 00-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 01-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 01-2.023-.454 3.544 3.544 0 01-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 01-.154-.838L2.178 4.5H1.75a.75.75 0 010-1.5h2.234a.249.249 0 00.125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 011.5 0zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327z" fill="#656d76" transform="translate(0, -8) scale(0.85)"/>
      <text x="16" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#57606a">
        ${escapeXml(data.license)}
      </text>
    </g>
    
    <!-- Size -->
    <g transform="translate(240, 0)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" fill="#656d76">
        ${escapeXml(data.size)}
      </text>
    </g>
  </g>
  
  <!-- Updated At -->
  <text x="${padding}" y="${height - padding + 5}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" fill="#656d76" font-style="italic">
    ${escapeXml(data.updatedAt)}
  </text>
</svg>`;
}

function generateErrorSVG(message) {
  const width = 400;
  const height = 100;
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="transparent" rx="8"/>
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="#fff8f8" stroke="#f85149" stroke-width="1" rx="8"/>
  <text x="${width / 2}" y="${height / 2}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#d1242f" text-anchor="middle" dominant-baseline="middle">
    ${escapeXml(message)}
  </text>
</svg>`;
}

function wrapText(text, maxLength) {
  if (!text || text.length <= maxLength) {
    return [text || ''];
  }
  
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  for (const word of words) {
    if ((currentLine + word).length <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }
      currentLine = word;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  // Limit to 2 lines and add ellipsis if needed
  if (lines.length > 2) {
    lines[1] = lines[1].substring(0, maxLength - 3) + '...';
    return lines.slice(0, 2);
  }
  
  return lines;
}

function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') {
    return unsafe;
  }
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
