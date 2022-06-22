// Delete = DELETE
import { parse } from 'url';
import { users } from '../models/users_db.js';

export default function remove(request, response) {
  const url = parse(request.url, true);
  const userId = url.query.id;
  console.log(userId);
}