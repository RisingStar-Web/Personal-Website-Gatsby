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
              Hello there, welcome to my portfolio.
              <br />
              This is Roy and I enjoy solving problems, troubleshooting issues, and coming up with solutions in a timely manner. I thrive in team settings, and I think my skill in effectively communicating with others is what drives my ability to solve a variety of problems.
              <br />
              <br />
              Here are my best quotes for development.
              <br />
              <br />
              "First solve the problem, then write the code"
              <br />
              "I love what I do and I do what my clients love & work with great clients all over the world to create thoughtful and purposeful websites." 
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
              href="https://github.com/RisingStar-Web/Personal-Website-Gatsby/blob/master/Web-Developer.pdf"
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
