// Read = GET
import { parse } from 'url';
import { users } from '../models/users_db.js';

export default function get(request, response) {
  const url = parse(request.url, true);
  const userId = url.query.userId;
  if (url.search == null) {
    response.statusCode = 200;
    response.write(JSON.stringify(users));
    response.end();
  } else {
    const user = users.filter(user => {
      user.id === url.query.userId;
    });
  }

}