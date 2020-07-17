import React from "react";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";
import ContentData from "../../typings/CotentData";

interface Props {
  title: string;
  colorClassName: string;
  contentDatas?: ContentData[];
}

const Section: React.FC<Props> = ({
  title,
  colorClassName,
  contentDatas,
}: Props) => {
  return (
    <section className="w-full h-auto flex flex-col justify-center p-2">
      <SectionHeader title={title} colorClassName={colorClassName} />
      <SectionContent contentDatas={contentDatas} />
    </section>
  );
};

export default Section;
