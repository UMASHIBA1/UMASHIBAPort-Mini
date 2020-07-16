import React from "react";

interface Props {
  text: string;
}

const H1: React.FC<Props> = ({ text }: Props) => {
  return <h1 className="text-xl sm:text-3xl">{text}</h1>;
};

export default H1;
