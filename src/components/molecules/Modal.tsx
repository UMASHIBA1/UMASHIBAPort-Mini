import React, { ReactNode } from "react";
import Overlay from "../atomics/Overlay";

interface Props {
  isDisable: boolean;
  children: ReactNode;
  onClickBG: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Modal: React.FC<Props> = (props: Props) => {
  return (
    <Overlay isDisable={props.isDisable} onClick={props.onClickBG}>
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 rounded-md">{props.children}</div>
      </div>
    </Overlay>
  );
};

export default Modal;
