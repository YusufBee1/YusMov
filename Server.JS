`javascript
const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);
try {
if (parsedUrl.pathname.includes('documentation')) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(fs.readFileSync('documentation.html'));
} else {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(fs.readFileSync('index.html'));
}
} catch (error) {
res.writeHead(500);
res.end('Server error: ' + error.message);
}
});
```
