import axios from 'axios';

const getPhotos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data;
};

const getPhotoById = async (id) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos/'+ id);
  return response.data;
};

export default {getPhotos, getPhotoById};