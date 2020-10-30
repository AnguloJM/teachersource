import axios from 'axios';

let apiUrl;

const apiUrls = {
  production: "https://sei-lessons-api.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiURL = spiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;