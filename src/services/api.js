import axios from 'axios';

import { timeoutms } from '../config';

const fetchDataFromApi = apiUrl => {
  return axios.get(apiUrl, { timeout: timeoutms });
};
export default fetchDataFromApi;
