// Update = PUT
import { parse as urlParse} from 'url';
import { parse as queryParse} from 'querystring';
import { users } from '../models/users_db.js';

export default function put(request, response) {
  const url = urlParse(request.url, true);
  const userId = url.pathname.slice(11);

  let body = '';
  request.on('data', chunk => {
    body += chunk;
    // flood attack
    if (body.length > 1e6) {
      request.connection.destroy();
    }
  }).on('end', () => {
    const params = queryParse(body);
    if (!userId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) {
        response.statusCode = 400;
        response.write(`Id ${userId} is invalid`);
        response.end();
    } else {
      let flag = false;
      users.forEach((user) => {
        if (userId === user.id) {
          if (params.username) user.username = params.username;
          if (params.age) user.age = params.age;
          if (params.hobbies) user.hobbies = params.hobbies.split(' ');
          flag = !flag;
          response.statusCode = 200;
          response.end(`Found id ${userId} and updated`);
        }
      });
      if (!flag) {
        response.statusCode = 404;
        response.end(`Record with id ${userId} doesn't exist`);
      }
    }
  });

};