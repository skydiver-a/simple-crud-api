// Create = POST
import { parse } from 'querystring';
import { v4 as uuid } from "uuid";
import { users } from '../models/users_db.js';

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
      const user = {
          id: uuid(),
          username: params.username,
          age: params.age,
          hobbies: params.hobbies.split(' ')
      }
      users.push(user);
      response.statusCode = 201;
      response.end("New user created");
    }
  });
}