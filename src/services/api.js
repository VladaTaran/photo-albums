import axios from "axios";

const API = process.env.REACT_APP_HOST_ADDR;

const ajax = axios.create({
    baseURL: API,
    headers: { "Content-Type": "application/json" }
  });

export const get = (url, params) => ajax.get(url, { params });
export default {
  users: {
    getUsers: () => get('/users'),
  },
  albums: {
    getAlbums: () => get('/albums'),
    getPhotos: params => get(`/photos?albumId=${params.id}`)
  }
};