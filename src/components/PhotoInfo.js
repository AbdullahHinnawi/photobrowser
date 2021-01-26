import React, {useEffect, useState} from 'react';
import '../css/styles.css';
import photoService from '../services/photoService';
import Card from 'react-bootstrap/Card';
export const PhotoInfo = (props) => {

  const photoId = props.match.params.id;

  console.log("photoId", photoId);

  const [selected, setSelected] = useState([]);

  // get selected photo
  useEffect(() => {
    photoService.getPhotoById(photoId).then(result => {
      setSelected(result);
      console.log("Selected photo: ", result);
    });
  }, []);



  return (

      <div style={{ padding:"10px",marginTop:'80px' }}>

        <Card  border="none" style={{ maxWidth:'600px', margin:'auto' }}>
          <Card.Img variant="top" src={selected.url} />
          <Card.Body>
            <Card.Title>{selected.title}</Card.Title>
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