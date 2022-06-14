import React from "react";
import ImageData from "./imageData";
import ImageRender from "./ImageRender";

const App = () => {
  return (
    <div>
      {ImageData.map((data) => {
        <ImageRender
          key={data.height}
          url={data.url}
          thumb={data.thumbnail}
          width={data.width}
          height={data.height}
        />
      })}
    </div>
  )
};
export default App;
