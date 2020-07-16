import React from "react";

const PageWrapper: React.FC = (props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex  flex-col w-full h-full lg:w-3/5 lg:mt-8">
        {props.children}
      </div>
    </div>
  );
};

export default PageWrapper;
