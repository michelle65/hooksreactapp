import React from "react";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";
const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/black/aleksandra-sapozhnikova-oKpf7wGJzP0-unsplash.jpg"
        secondaryImg="aleksandra-sapozhnikova-oKpf7wGJzP0-unsplash.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/black/elijah-hail-PpjNNCWh2ng-unsplash.jpg"
        secondaryImg="elijah-hail-PpjNNCWh2ng-unsplash.jpg"
        alt="" 
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
