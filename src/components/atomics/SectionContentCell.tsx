import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClickFC?: () => void;
}

const SectionContentCell: React.FC<Props> = ({
  children,
  onClickFC,
}: Props) => {
  return (
    <div
      className="shadow-md h-24 w-24 m-2 rounded-sm cursor-pointer p-2"
      onClick={onClickFC}
    >
      {children}
    </div>
  );
};

export default SectionContentCell;
