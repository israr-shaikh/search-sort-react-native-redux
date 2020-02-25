var url = 'https://reqres.in/api';
export function getUsers(page, per_page) {
  return `${url}/users?page=${page}&per_page=${per_page}`;
}
