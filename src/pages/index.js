import React from "react";
import RoyImg from "../assets/images/me1.png";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper>
        <UserTitle>
          Roy <span>Chong</span>
        </UserTitle>
        <UserDescription>
          <div>
            <p>
              Hello there, welcome to my portfolio. I am a senior web developer
              who is comfortable with architecting and implementing scalable and
              maintainable web app/services with the TDD/BDD approach..
              <br />
              <br />
              Specifically, I have long been focusing on responsive web
              application development with
              React.js/Redux/Styled-Component/Material-UI, Angular 2+,
              Vue.js/Vuex/Vuetify, Node.js, Laravel, WordPress, Webflow, PHP,
              ES6/7, TypesScript, HTML5, CSS3, and etc.
              <br />
              <br />
              During my career, I have participated in a wide range of web
              projects ( e-commerce, real estate, social media platforms,
              fintech ), and learned how to collaborate with team members, great
              attitude in the development process, project management, meet
              deadlines, and risk management.
              <br />
              <br />
              🚀Let's go!🛫
            </p>
            <DownloadButton
              href="https://github.com/RisingStar-Web/Personal-Website-Gatsby/blob/master/Roy-Resume.pdf"
              download
              title="Resume"
            >
              Download Resume
            </DownloadButton>
          </div>
          <img src={RoyImg} alt="Roy" />
        </UserDescription>
        <UserTopic>
          {about.map((item) => (
            <AboutBox key={item.id} info={item}>
            </AboutBox>
          ))}
        </UserTopic>
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
