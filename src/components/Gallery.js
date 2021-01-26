
import React, {useEffect, useState} from 'react';
import Photo from './Photo';
import '../css/styles.css';
import photoService from '../services/photoService';

export const Gallery = () => {

  const [items, setItems] = useState([]);

  // get photos
  useEffect( () => {
     photoService.getPhotos().then(result => {
      setItems(result);
      console.log("Photos: ", result);
    });
  }, []);

  return (

      <div className="container">

        {items ? items.map(item => {
          return(
              <Photo item={item}/>

          );
        }
        ): <h2>Loading...</h2>}


      </div>
  );


};

export default Gallery;