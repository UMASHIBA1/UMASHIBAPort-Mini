import React from "react";
import H1 from "../atomics/H1";

interface Props {
  text: string;
  colorClassName?: string;
}

const SectionTitle: React.FC<Props> = ({
  text,
  colorClassName = "white",
}: Props) => {
  return (
    <div
      className={`flex items-center h-full justify-start pl-2 text-${colorClassName}`}
    >
      <H1 text={text} />
    </div>
  );
};

export default SectionTitle;
