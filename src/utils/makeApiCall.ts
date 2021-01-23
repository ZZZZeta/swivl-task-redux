type MakeApiCall = {
  url: string;
  method: 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
};

export function makeApiCall({ url, method, body }: MakeApiCall) {
  return fetch(url, { method, body })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
