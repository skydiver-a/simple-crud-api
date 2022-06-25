// Read = GET
import { parse } from 'url';
import { users } from '../models/users_db.js';

export default function get(request, response) {
  const url = parse(request.url, true);
  const userId = url.pathname.slice(11);

  if (url.search == null && url.pathname.length <= 11) {
    response.statusCode = 200;
    users.forEach(user => response.write(
    `{
      id: ${user.id},
      username: ${user.username},
      age: ${user.age},
      hobbies: ${user.hobbies}
    }\n`
    ));
    response.end();
  } else {
    if (!userId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) {
      response.statusCode = 400;
      response.write(`Id ${userId} is invalid`);
      response.end();
    } else {
      let flag = false;
      users.forEach(user => {
        if (userId === user.id) {
          response.statusCode = 200;
          response.write(`{
            id: ${user.id},
            username: ${user.username},
            age: ${user.age},
            hobbies: ${user.hobbies}
          }\n`);
          flag = !flag;
        }
      });
      if (!flag) {
        response.statusCode = 404;
        response.write(`Record with id ${userId} doesn't exist`);
      }
      response.end();
    }
  }
}