import React, {useEffect, useState} from 'react';
import photoService from '../services/photoService';
import Photo from './Photo';



import '../css/styles.css';
import Pagination from './Pagination';

export const Gallery = () => {

  const [offset, setOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageLimit] = useState(28);
  // pageCount is the total number of pages = all items / page limit
  const [pageCount, setPageCount] = useState(0);


  useEffect(async () => {
    const allItems = await photoService.getPhotos();
    setCurrentItems(allItems.slice(offset, offset + pageLimit));
    // set an integer value for the total number of pages
    setPageCount(Math.ceil(allItems.length / pageLimit));
  }, [offset]);




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
                        <Photo item={item}/>
                    );
                  }
              ) : <h2>Loading...</h2>}

            </div>

            <Pagination pageCount={pageCount}
                        handlePageClick={handlePageClick}/>

          </div>
      );

    };

export default Gallery;