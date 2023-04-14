import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import LaunchpadValue from "./LaunchpadValue";

const LaunchpadDescription = ({ item }) => {
  return (
    <div>
      <p className="font-13 mb-4">{item.description}</p>
      <VideoPlayer />
      <div className="my-4">
        {item.data.map((data, index) => {
          return (
            <LaunchpadValue key={index} name={data.name} value={data.value} />
          );
        })}
      </div>
    </div>
  );
};

export default LaunchpadDescription;
