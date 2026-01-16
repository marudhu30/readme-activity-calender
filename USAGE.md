# GitHub Repository Card API - Usage Guide

## Overview

This serverless API generates comprehensive, beautiful SVG cards for GitHub repositories that serve as complete README cover images. The generated SVG provides full understanding of a repository without needing to read any additional documentation.

## Features

### 🎨 Visual Design
- **1000px width** - Covers full README width
- **Auto-calculated height** - Adapts to content
- **Rounded corners** - Modern, polished look
- **Gradient header** - Eye-catching design
- **Drop shadows** - Professional depth
- **Light & Dark themes** - Matches any README style

### 📊 Comprehensive Metrics (8 Key Stats)
- ⭐ **Stars** - Repository popularity
- 🍴 **Forks** - Community engagement
- 👁 **Watchers** - Active subscribers
- 🔴 **Issues** - Open issue count
- 🔀 **Pull Requests** - Total PRs
- 👥 **Contributors** - Team size
- 📦 **Size** - Repository size
- 📅 **Created** - Repository age

### 🎯 Repository Identity
- Large repository name (36px font)
- Owner username
- One-line description
- Public/Private/Archived badges
- Primary language with GitHub colors

### 💪 Activity & Health Indicators
- **Health Status**: Active (≤30 days) or Stale
- **Commit Activity**: High/Medium/Low (last 4 weeks)
- **Last Updated**: Relative time (e.g., "6m ago")

### 💻 Technical Insights
- **Language Breakdown**: Visual bar showing top 5 languages with percentages
- **License**: License type or "No license"
- **Default Branch**: main, master, etc.
- **Features**: ✓/✗ indicators for Issues, Wiki, Pages, Discussions

### 👥 Community
- **Top 6 Contributors**: Shows initials, usernames, and commit counts
- **Topics/Tags**: Repository tags displayed as badges

### 🚀 Release Information
- Latest release tag and publish date (when available)

## API Endpoints

### Production (Vercel)
```
https://your-domain.vercel.app/api?username={username}&repo={repo}
```

### Query Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `username` | ✅ Yes | - | GitHub username or organization |
| `repo` | ✅ Yes | - | Repository name |
| `theme` | ❌ No | `light` | Theme: `light` or `dark` |

## Usage Examples

### Basic Usage

```markdown
![Repository Card](https://your-domain.vercel.app/api?username=microsoft&repo=vscode)
```

### Light Theme (Default)
```markdown
![VS Code](https://your-domain.vercel.app/api?username=microsoft&repo=vscode&theme=light)
```

### Dark Theme
```markdown
![React](https://your-domain.vercel.app/api?username=facebook&repo=react&theme=dark)
```

### Popular Repositories

**Microsoft TypeScript:**
```markdown
![TypeScript](https://your-domain.vercel.app/api?username=microsoft&repo=TypeScript)
```

**Vue.js:**
```markdown
![Vue](https://your-domain.vercel.app/api?username=vuejs&repo=vue)
```

**Django:**
```markdown
![Django](https://your-domain.vercel.app/api?username=django&repo=django)
```

## Environment Variables

### Optional Configuration

#### `GITHUB_TOKEN`
- **Purpose**: Increases API rate limits from 60 to 5000 requests/hour
- **How to get**: Create a Personal Access Token at https://github.com/settings/tokens
- **Required Scopes**: `public_repo` (or no scopes for public data only)

**On Vercel:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `GITHUB_TOKEN` with your token value
4. Redeploy

## Response Details

### Content Type
```
Content-Type: image/svg+xml
```

### Cache Control
```
Cache-Control: public, max-age=1800
```
*Cards are cached for 30 minutes to respect GitHub API rate limits*

### Error Handling

The API gracefully handles errors and returns SVG error cards:

#### 400 - Missing Parameters
```json
{
  "message": "Missing username or repo parameter"
}
```

#### 404 - Repository Not Found
```json
{
  "message": "Repository not found"
}
```

#### 403 - Rate Limit Exceeded
```json
{
  "message": "API rate limit exceeded"
}
```

#### 500 - Server Error
```json
{
  "message": "Failed to fetch repository data"
}
```

## Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd readme-activity-calender

# Install dependencies
npm install

# Set environment variables (optional)
export GITHUB_TOKEN=your_token_here

# Test the API
node test-repo-card.js
```

### Test Script

The `test-repo-card.js` file demonstrates usage:

```javascript
const handler = require('./api/index.js');

const req = {
  query: {
    username: 'microsoft',
    repo: 'vscode',
    theme: 'light'  // or 'dark'
  }
};

// Run and save output
handler(req, res);
```

Output will be saved to `test-output.svg` for preview.

## Best Practices

### 1. **Place at README Top**
Position the card as the first visual element in your README:
```markdown
# My Project

![Project Card](https://api.../username/repo)

## Description
...
```

### 2. **Match Theme to README**
- Use `theme=light` for light mode READMEs
- Use `theme=dark` for dark mode READMEs

### 3. **Cache Awareness**
- Cards update every 30 minutes
- Force refresh by clearing browser cache
- Recent changes may not appear immediately

### 4. **Repository Requirements**
Works best with repositories that have:
- ✅ Clear description
- ✅ Active development
- ✅ Multiple contributors
- ✅ Language diversity
- ✅ Topics/tags set

### 5. **Rate Limits**
- Without token: 60 requests/hour per IP
- With token: 5,000 requests/hour
- **Recommendation**: Set `GITHUB_TOKEN` for production

## Technical Details

### Data Sources
All data is fetched from GitHub REST API v3:
- `/repos/{owner}/{repo}` - Main repo data
- `/repos/{owner}/{repo}/contributors` - Contributors list
- `/repos/{owner}/{repo}/languages` - Language breakdown
- `/repos/{owner}/{repo}/releases` - Release information
- `/repos/{owner}/{repo}/stats/participation` - Commit activity

### Supported Languages
The API recognizes 30+ programming languages with official GitHub colors including:
- TypeScript, JavaScript, Python, Java, C++, C, C#, Go, Rust
- Ruby, PHP, Swift, Kotlin, Scala, Shell, HTML, CSS, Vue
- And many more...

### Browser Support
SVG rendering supported in:
- ✅ Chrome/Edge 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ GitHub Markdown Renderer

## Troubleshooting

### Card Not Displaying
1. Check URL is correct
2. Verify repository exists and is public
3. Check browser console for errors
4. Try clearing cache

### Data Not Updating
- Wait 30 minutes for cache expiration
- Check if repository has recent activity
- Verify GitHub API status

### Rate Limit Issues
- Set `GITHUB_TOKEN` environment variable
- Reduce request frequency
- Wait for rate limit reset (shown in error)

## Credits

- **SVG Icons**: Octicons (GitHub's icon set)
- **Fonts**: System font stack
- **Language Colors**: GitHub's official language colors
- **API**: GitHub REST API v3

## License

MIT License - Feel free to use and modify!

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Made with ❤️ for the GitHub community**
