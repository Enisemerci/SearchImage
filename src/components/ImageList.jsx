import React from "react";
import { ImageItem } from "./ImageItem";

export const ImageList = ({ imagesPlaceholder }) => {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image,index) => {
       return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};
