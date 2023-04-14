import React from "react";
import LaunchpadDescription from "./LaunchpadDescription";
import LaunchpadAction from "./LaunchpadAction";

const LaunchpadBody = ({ item }) => {
  return (
    <div className="content mt-4">
      <div className="row">
        <div className="col-md-8">
          <LaunchpadDescription item={item} />
        </div>
        <div className="col-md-4">
          <LaunchpadAction item={item} />
        </div>
      </div>
    </div>
  );
};

export default LaunchpadBody;
