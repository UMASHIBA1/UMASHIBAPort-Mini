import React from "react";

const PageWrapper: React.FC = (props) => {
  return <div className="w-full h-full">{props.children}</div>;
};

export default PageWrapper;
