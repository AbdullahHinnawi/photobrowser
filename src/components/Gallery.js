import React, {useEffect, useState} from 'react';
import Photo from './Photo';
import photoService from '../services/photoService';
import '../css/styles.css';
import Pagination from './Pagination';



export const Gallery = () => {

  const [offset, setOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageLimit] = useState(28);
  // pageCount is the total number of pages = all items / page limit
  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    photoService.getPhotos().then(result => {
      const allItems = result;
      console.log("allItems: ", allItems);
      setCurrentItems(allItems.slice(offset, offset + pageLimit));
      // set an integer value for the total number of pages
      setPageCount(Math.ceil(allItems.length / pageLimit));
    }).catch(error => console.log(error));

  }, [offset,pageLimit]);


  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage);
    // update offset state by adding 1 on each click
    setOffset(selectedPage + 1);

  };

  return (
      <div className="container">

        <div className="grid-container">

          {currentItems ? currentItems.map(item => {
                return (
                    <Photo key={item.id} item={item}/>
                );
              }
          ) : <h2 style={{textAlign:"center"}}>Loading...</h2>}

        </div>

        <Pagination pageCount={pageCount}
                    handlePageClick={handlePageClick}/>

      </div>
  );

};

export default Gallery;