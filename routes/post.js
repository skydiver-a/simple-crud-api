// Create = POST
import { parse } from 'querystring';
import { v4 as uuid } from "uuid";
import { users } from '../models/users_db.js';

export default function post(request, response) {
  if(request.method === 'POST') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
      // flood attack
      if (body.length > 1e6) {
        request.connection.destroy();
      }
    }).on('end', () => {
      body = parse(body);
      console.log(body);
      response.end('ok')
    });
  }

}