import axios from 'axios';

const fetchDataFromApi = apiUrl => {
  return axios.get(apiUrl);
};
export default fetchDataFromApi;
