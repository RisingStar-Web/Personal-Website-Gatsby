import React from "react";
import { top_portfolios } from "../data/Portfolios";
import Coverflow from "react-coverflow";
import { Hero, Container } from "../styles/portfolioStyle";
import ParticlesBg from "particles-bg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

var fn = function() {
  /* do you want */
};

const Portfolio = () => {
  return (
    <Container>
      <ParticlesBg type="random" bg={true} color="#ff00ff" num={200} />
      <Hero>
        <Coverflow
          displayQuantityOfSide={1.5}
          navigation={false}
          width={1900}
          height={800}
          enableHeading={true}
          active={0}
        >
          {top_portfolios.map((image, index) => (
            <img src={image.src} alt={image.title} data-action={image.link} />
          ))}
        </Coverflow>
      </Hero>
      <br></br>
      <Tabs>
        <TabList>
          <Tab>React</Tab>
          <Tab>Vue</Tab>
          <Tab>Angular</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </Container>
  );
};
export default Portfolio;
