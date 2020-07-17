import React, { useEffect } from "react";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
  isDisable: boolean;
}

const Overlay: React.FC<Props> = ({ onClick, children, isDisable }: Props) => {
  useEffect(() => {
    if (isDisable) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isDisable]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center ${
        isDisable ? "hidden" : "block"
      }`}
    >
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-75`}
        onClick={onClick}
      ></div>
      <div className={`z-10`}>{children}</div>
    </div>
  );
};

export default Overlay;
