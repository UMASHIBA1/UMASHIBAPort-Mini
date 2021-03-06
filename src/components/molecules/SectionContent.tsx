import React, { useState } from "react";
import ContentData from "../../typings/CotentData";
import SectionContentCell from "../atomics/SectionContentCell";
import Modal from "./Modal";
import H1 from "../atomics/H1";
import Button from "../atomics/Button";

interface Props {
  contentDatas?: ContentData[];
  colorClassName?: string;
}

interface OneContentProps {
  content: ContentData;
  colorClassName?: string;
}

const OneContent: React.FC<OneContentProps> = ({
  content,
  colorClassName,
}: OneContentProps) => {
  const { title, description, link } = content;
  const [isDisable, changeIsDisable] = useState(true);
  return (
    <React.Fragment>
      <Modal isDisable={isDisable} onClickBG={() => changeIsDisable(true)}>
        <div
          className="p-2 m-2"
          style={{ maxWidth: "50rem", minWidth: "20rem" }}
        >
          <H1 text={title} />
          <div className="py-2">{description}</div>
          {link !== undefined ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button colorClassName={colorClassName} text="見てみる" />
            </a>
          ) : null}
        </div>
      </Modal>
      <SectionContentCell onClickFC={() => changeIsDisable(false)}>
        <div className="break-words">{title}</div>
      </SectionContentCell>
    </React.Fragment>
  );
};

const SectionContent: React.FC<Props> = ({
  contentDatas,
  colorClassName,
}: Props) => {
  return (
    <div className="w-full h-full flex justify-start flex-row flex-wrap pt-2">
      {contentDatas !== undefined
        ? contentDatas.map((content) => {
            return (
              <OneContent
                colorClassName={colorClassName}
                key={content.title + content.description}
                content={content}
              />
            );
          })
        : null}
    </div>
  );
};

export default SectionContent;
