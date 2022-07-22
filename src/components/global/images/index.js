import React from "react";
import ImageOptions from "./imageOptions";
import './styles.css';

export default function Image({ source }) {
  return (
    <div className="image-item">
      <img src={source} alt="Squirrel" />
      <ImageOptions />
    </div>
  );
}

