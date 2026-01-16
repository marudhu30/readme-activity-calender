// Local development server for testing the API
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const handler = require('./api/index.js');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Log incoming requests
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Serve static HTML landing page for root path
  if (parsedUrl.pathname === '/' || parsedUrl.pathname === '') {
    const htmlPath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error loading landing page');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
    return;
  }
  
  // Handle API requests
  if (parsedUrl.pathname === '/api') {
    // Mock Vercel request/response format
    const mockReq = {
      query: parsedUrl.query,
      url: req.url,
      method: req.method,
      headers: req.headers
    };
    
    const mockRes = {
      statusCode: 200,
      headers: {},
      setHeader(key, value) {
        this.headers[key] = value;
        res.setHeader(key, value);
      },
      status(code) {
        this.statusCode = code;
        res.statusCode = code;
        return this;
      },
      send(data) {
        Object.keys(this.headers).forEach(key => {
          res.setHeader(key, this.headers[key]);
        });
        res.statusCode = this.statusCode;
        res.end(data);
      }
    };
    
    // Call the serverless function handler
    try {
      handler(mockReq, mockRes);
    } catch (error) {
      console.error('Error:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Error: ${error.message}`);
    }
    return;
  }
  
  // 404 for other paths
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`\n🚀 Local development server started!`);
  console.log(`\n📍 Endpoints:`);
  console.log(`   Landing Page: http://localhost:${PORT}/`);
  console.log(`   API: http://localhost:${PORT}/api?username={username}&repo={repo}&theme={theme}`);
  console.log(`\n📝 Example API usage:`);
  console.log(`   http://localhost:${PORT}/api?username=microsoft&repo=vscode`);
  console.log(`   http://localhost:${PORT}/api?username=torvalds&repo=linux&theme=dark`);
  console.log(`\n💡 Press Ctrl+C to stop the server\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down server...');
  server.close(() => {
    console.log('Server stopped');
    process.exit(0);
  });
});
