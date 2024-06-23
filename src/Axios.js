import axios from 'axios';


const api = axios.create({
  baseURL: 'https://tripifyme.in/api',
  withCredentials: true, // Include credentials with requests
  headers: {
    'Content-Type': 'application/json',

  },
});

export default api;

export const get_api = (token = null) => {

  return axios.create({
    baseURL: 'https://tripifyme.in/api',
    withCredentials: true, // Include credentials with requests
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Token ${token ? token : null}`
    }
  })
}

export const get_api_form = () => {

  return axios.create({
    baseURL: 'https://tripifyme.in/api',
    withCredentials: true, // Include credentials with requests
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
}

export const getCsrfTokenFromCookies = () => {
  const cookies = document.cookie.split(';');
  console.log('name', cookies);
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') {
      return value;
    }
  }
  return null;
};
