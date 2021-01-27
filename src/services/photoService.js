import axios from 'axios';

const getPhotos =  () => {
  const request =  axios.get('https://jsonplaceholder.typicode.com/photos');
  return request.then(res => res.data);
};

const getPhotoById =  (id) => {
  const request =  axios.get('https://jsonplaceholder.typicode.com/photos/'+id);
  return request.then(res => res.data);
};

export default {getPhotos, getPhotoById};