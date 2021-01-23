export const apiGetUserList = (per_page: number = 100, since: number = 0) =>
  fetch(`https://api.github.com/users?per_page=${per_page}&since=${since}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const apiGetUser = (username: string) =>
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
