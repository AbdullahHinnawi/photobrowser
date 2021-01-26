import React from 'react';
import '../css/styles.css';
import { Link } from "react-router-dom";


export const Photo = ({item}) => {

  return (

      <div className="image-card">
        <Link to={`/photos/${item.id}`}>
          <img key={item.id}
              className="image"
               src={item.thumbnailUrl}
               width="150"
               height="150"
               alt={item.id}
           />
        </Link>

      </div>

  );
};
export default Photo;