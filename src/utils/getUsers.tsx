export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json'
    } 
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}