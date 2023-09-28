import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";
const ImageChangeOnScroll = () => {
  var count =0;
  return (
    <div>
       <ImageToggleOnScroll
        primaryImg="/black/aleksandra-sapozhnikova-oKpf7wGJzP0-unsplash.jpg"
        secondaryImg="aleksandra-sapozhnikova-oKpf7wGJzP0-unsplash.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnScroll
        primaryImg="/black/elijah-hail-PpjNNCWh2ng-unsplash.jpg"
        secondaryImg="elijah-hail-PpjNNCWh2ng-unsplash.jpg"
        alt=""  
      />
    </div>
  );
};

export default ImageChangeOnScroll;
