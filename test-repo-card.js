// Quick test script for repo-card API
const handler = require('./api/index.js');
const fs = require('fs');
const path = require('path');

// Mock request and response objects
const req = {
  query: {
    username: 'microsoft',
    repo: 'vscode',
    theme: 'light' // Try 'dark' for dark theme
  }
};

const res = {
  headers: {},
  statusCode: 200,
  setHeader(key, value) {
    this.headers[key] = value;
  },
  status(code) {
    this.statusCode = code;
    return this;
  },
  send(data) {
    console.log(`Status: ${this.statusCode}`);
    console.log(`Headers:`, this.headers);
    console.log(`\nSVG Length: ${data.length} characters`);
    
    // Save the SVG to a file for preview
    const outputPath = path.join(__dirname, 'test-output.svg');
    fs.writeFileSync(outputPath, data);
    console.log(`\nSVG saved to: ${outputPath}`);
    console.log('\nOpen the SVG file in a browser to preview.');
  }
};

// Run the handler
console.log('Testing repo card API...');
console.log(`Repository: ${req.query.username}/${req.query.repo}`);
console.log(`Theme: ${req.query.theme}\n`);
handler(req, res);
