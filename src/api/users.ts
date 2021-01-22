export const apiGetUserList = () =>
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const apiGetUser = (username: string) =>
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
