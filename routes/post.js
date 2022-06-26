// Create = POST
import { parse } from 'querystring';
import { createUser } from  '../models/users_db.js';

export default function post(request, response) {
  let body = '';
  request.on('data', chunk => {
    body += chunk;
    // flood attack
    if (body.length > 1e6) {
      request.connection.destroy();
    }
  }).on('end', () => {
    const params = parse(body);
    const paramsArr = [
      params.username,
      params.age,
      params.hobbies
    ];
    if (paramsArr.length <= 1) {
      response.statusCode = 400;
      response.end("Request doesn't contain required fields");
    } else {
      createUser(params.username, params.age, params.hobbies.split(' '));
      response.statusCode = 201;
      response.end("New user created");
    }
  });
}