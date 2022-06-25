// Delete = DELETE
import { parse } from 'url';
import { users } from '../models/users_db.js';

export default function remove(request, response) {
  const url = parse(request.url, true);
  const userId = url.pathname.slice(11);

  if (!userId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) {
    response.statusCode = 400;
    response.write(`Id ${userId} is invalid`);
    response.end();
  } else {
    let flag = false;
    users.forEach((user, index) => {
      if (userId === user.id) {
        users.splice(index, 1);
        flag = !flag;
        response.statusCode = 204;
        response.end(`Found id ${userId} and deleted`);
      }
    });
    if (!flag) {
      response.statusCode = 404;
      response.end(`Record with id ${userId} doesn't exist`);
    }
  }
}