import React from "react";

interface Props {
  text: string;
  onClickFC?: () => void;
  colorClassName?: string;
}

const Button: React.FC<Props> = ({
  text,
  onClickFC,
  colorClassName = "gray-500",
}: Props) => {
  return (
    <div
      onClick={onClickFC}
      className={`p-2 pr-4 bg-${colorClassName} hover:shadow-md rounded-md cursor-pointer text-white w-auto inline-block`}
    >
      {text}
    </div>
  );
};

export default Button;
