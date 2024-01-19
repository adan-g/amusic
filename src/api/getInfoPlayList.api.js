import axios from "axios";

// Function to determine if the environment is local
const isLocal = () => window.location.href.includes('localhost');

// Function to get the API base URL based on the environment
const getBaseUrl = () => {
  return isLocal() ? 'http://127.0.0.1:8000/api/v1/playList/' : 'https://adangimenez.com/api/v1/playList/';
}

// Function to create an Axios instance with dynamic base URL
const createAxiosInstance = () => {
  const baseURL = getBaseUrl();
  return axios.create({ baseURL });
}

// Exporting functions for API requests
export const getPlayList = () => createAxiosInstance().get('/');
export const addSong = (song) => createAxiosInstance().post('/', song);