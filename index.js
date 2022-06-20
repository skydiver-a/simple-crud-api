import http from 'http';
import get from './routes/get.js';
import post from './routes/post.js';
import put from './routes/put.js';
import remove from './routes/remove.js';

const port = process.env.PORT || 3000;

http.createServer((request, response) => {
  if (request.url.includes('api/users')) {
    switch (request.method) {
      case 'GET':
        get(request, response);
        break;
      case 'POST':
        post(request, response);
        break;
      case 'PUT':
        put(request, response);
        break;
      case 'DELETE':
        remove(request, response);
        break;
      default:
        break;
    }
  } else {
    response.statusCode = 404;
    response.end("This path doesn't exist");
  }
}).listen(port, console.log(`Server running on port ${port}`));