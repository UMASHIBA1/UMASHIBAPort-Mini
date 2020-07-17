import React from "react";
import ContentData from "../../typings/CotentData";
import SectionContentCell from "../atomics/SectionContentCell";

interface Props {
  contentDatas?: ContentData[];
}

const SectionContent: React.FC<Props> = ({ contentDatas }: Props) => {
  return (
    <div className="w-full h-full flex justify-start flex-row flex-wrap pt-2">
      {contentDatas !== undefined
        ? contentDatas.map((content) => {
            return (
              <SectionContentCell>
                <div className="break-words">{content.title}</div>
              </SectionContentCell>
            );
          })
        : null}
    </div>
  );
};

export default SectionContent;
