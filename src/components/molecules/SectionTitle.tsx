import React from "react";
import H1 from "../atomics/H1";

interface Props {
  text: string;
}

const SectionTitle: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className="flex items-center h-full justify-start pl-2">
      <H1 text={text} />
    </div>
  );
};

export default SectionTitle;
