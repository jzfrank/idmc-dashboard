import React from "react";

const cellWrapper = (content) => {
  return (
    // <div className="">
    <span className="" title={content}>
      {content}
    </span>
  );
};

export default cellWrapper;
