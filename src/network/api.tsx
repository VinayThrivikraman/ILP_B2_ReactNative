import axios from 'axios'

let api = axios.create();
api.defaults.baseURL = 'https://mocki.io/';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;