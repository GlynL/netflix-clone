import React from "react";

const Video = ({ video }) => {
  return (
    <div>
      <iframe
        width={400}
        height={250}
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        frameBorder="0"
      />
    </div>
  );
};

export default Video;
