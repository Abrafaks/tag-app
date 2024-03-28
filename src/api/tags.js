import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.stackexchange.com/2.3'
});
