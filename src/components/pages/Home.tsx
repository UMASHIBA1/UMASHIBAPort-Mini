import React from "react";
import PageWrapper from "../templates/PageWrapper";
import Section from "../molecules/Section";
import aboutMeData from "../../datas/aboutMeData";
import worksData from "../../datas/worksData";
import skillsData from "../../datas/skillsData";
import contactData from "../../datas/contactData";

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <Section
        title="About Me"
        colorClassName="red-500"
        contentDatas={aboutMeData}
      />
      <Section
        title="Works"
        colorClassName="blue-500"
        contentDatas={worksData}
      />
      <Section
        title="Skills"
        colorClassName="orange-500"
        contentDatas={skillsData}
      />
      <Section
        title="Contact"
        colorClassName="green-500"
        contentDatas={contactData}
      />
    </PageWrapper>
  );
};

export default Home;
