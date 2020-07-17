import React, { useState } from "react";
import ContentData from "../../typings/CotentData";
import SectionContentCell from "../atomics/SectionContentCell";
import Modal from "./Modal";
import H1 from "../atomics/H1";
import Button from "../atomics/Button";

interface Props {
  contentDatas?: ContentData[];
}

interface OneContentProps {
  content: ContentData;
}

const OneContent: React.FC<OneContentProps> = ({
  content,
}: OneContentProps) => {
  const { title, description, link } = content;
  const [isDisable, changeIsDisable] = useState(true);
  return (
    <React.Fragment>
      <Modal isDisable={isDisable} onClickBG={() => changeIsDisable(true)}>
        <div
          className="p-2 m-2"
          style={{ maxWidth: "90vw", minWidth: "20rem" }}
        >
          <H1 text={title} />
          <div className="p-2">{description}</div>
          {link !== undefined ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button text="見てみる" />
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

const SectionContent: React.FC<Props> = ({ contentDatas }: Props) => {
  return (
    <div className="w-full h-full flex justify-start flex-row flex-wrap pt-2">
      {contentDatas !== undefined
        ? contentDatas.map((content) => {
            return (
              <OneContent
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
