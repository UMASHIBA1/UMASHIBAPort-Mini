import React from "react";
import SectionTitle from "./SectionTitle";

interface Props {
  title: string;
  colorName: string;
}

const Line: React.FC = () => {
  return <div className={`h-64 w-4 m-2 bg-white`} />;
};

const LineWrapper: React.FC = () => {
  return (
    <div className="absolute right-0 flex h-full  transform rotate-45 -translate-y-4 translate-x-8">
      <Line />
      <Line />
    </div>
  );
};

const SectionHeader: React.FC<Props> = ({ title, colorName }: Props) => {
  return (
    <div className="w-full p-2 h-32">
      <div
        className={`flex flex-row w-full h-full shadow-2xl relative rounded-md bg-${colorName} overflow-hidden`}
      >
        <SectionTitle text={title} />
        <LineWrapper />
      </div>
    </div>
  );
};

export default SectionHeader;
