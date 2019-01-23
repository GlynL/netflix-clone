import React from "react";
import { Spring } from "react-spring";

const Video = ({ video }) => {
  return (
    <Spring
      from={{ height: "169px", width: "300px" }}
      to={{ height: "220px", width: "400px" }}
    >
      {props => (
        <div>
          <iframe
            style={{ ...props }}
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            frameBorder="0"
          />
        </div>
      )}
    </Spring>
  );
};

export default Video;
