// Update = PUT
import { parse } from 'url';
import { users } from '../models/users_db.js';

export default function put(request, response) {
  const url = parse(request.url, true);
}