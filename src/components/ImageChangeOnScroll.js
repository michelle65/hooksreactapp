import React, { useEffect, useState } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";
const ImageChangeOnScroll = () => {
  const [mouseEventCnt, setMouseEventCnt] = useState(0);
  var count = 0;

  return (
    <div>
      <span>mouseEventCnt: ${mouseEventCnt}</span>
      <div
        onMouseOver={() => {
          console.log(`Count : ${count++}`);
          setMouseEventCnt(mouseEventCnt + 1);
        }}
      >
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
    </div>
  );
};

export default ImageChangeOnScroll;
