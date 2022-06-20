import http from 'http';
import { get } from './routes/get';
import { post } from './routes/post';
import { put } from './routes/put';
import { remove } from './routes/remove';

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