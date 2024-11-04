import axios from 'axios';

// axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

// export const fetchArticles = async searchQuery => {
//   const response = await axios.get('/search', {
//     params: {
//       query: searchQuery,
//     },
//   });
//   return response.data.hits;
// };
const BASE_URL = 'https://api.publicapis.org/';
const API_KEY = 'GjnIzDClyIs8vsisERhsQBGFsheVpl9FBRTGcY4k';
const count = 5;
// axios.defaults.baseURL = 'https://api.nasa.gov/planetary/apod';

export const getPlanets = async () => {
  const response = await axios.get('https://api.publicapis.org/entries');
  console.log(response);
  return response.data;
};
