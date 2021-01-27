import React, {useEffect, useState} from 'react';
import '../css/styles.css';
import Card from 'react-bootstrap/Card';
import photoService from '../services/photoService';

export const PhotoInfo = (props) => {

  const photoId = props.match.params.id;

  console.log("photoId", photoId);

  const [selected, setSelected] = useState([]);

  // get selected photo
  useEffect(  () => {
     photoService.getPhotoById(photoId).then(result => {
       setSelected(result);
    }).catch(error => console.log(error));
  }, [photoId]);


  return (

      <div style={{ padding:"15px",marginTop:'80px' }}>

        <Card  border="none" style={{ maxWidth:'600px', margin:'auto',borderRadius:"5px" }}>
          <Card.Img variant="top" src={selected.url} />
          <Card.Body>
            <Card.Title>{selected.title ? selected.title.toUpperCase() : selected.title}</Card.Title>
            <Card.Text>
              Album id: {selected.albumId}<br/>
              Id: {selected.id}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>



  );
};
export default PhotoInfo;