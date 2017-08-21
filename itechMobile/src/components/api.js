import axios from 'axios';
const HOST =process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8081';

export function fetch(url) {
  return new Promise((resolve, reject)=> {
    axios.get(url)
        .then(response => {
          resolve(response.data);
        })
  })
}

export function getInfo(url) {
  return fetch(url);
}
