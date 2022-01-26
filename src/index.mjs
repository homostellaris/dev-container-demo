import http from 'http';
import prettify from './prettify.mjs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	let data = '';

	req.on('data', chunk => {
		data += chunk;
	})

	req.on('end', () => {
		prettify(data, (prettyData) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.end(prettyData);
		})
	})
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
