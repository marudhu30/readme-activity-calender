// Quick test script for repo-card API
const handler = require('./api/repo-card.js').default;

// Mock request and response objects
const req = {
  query: {
    username: 'microsoft',
    repo: 'vscode'
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
    console.log(`\nResponse:\n${data}`);
  }
};

// Run the handler
handler(req, res);
