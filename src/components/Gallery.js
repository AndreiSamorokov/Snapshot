import React, { useState } from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import Modal from "./Modal";

const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
 
 
  const [selectedImg, setSelectedImg] = useState(""); 

  const handleImage = img => {
    setSelectedImg( img ); 
  }

  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} onSelecImage={handleImage}/>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
      { selectedImg ? <Modal onSelecImage={handleImage}/> : ""}
    </div>
  );
};

export default Gallery;
