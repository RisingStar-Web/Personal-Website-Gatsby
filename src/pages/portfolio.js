import React, { useState, useCallback } from "react";
import {
  top_portfolios,
  react_portfolios,
  vue_portfolios,
  angular_portfolios,
  wordpress_portfolios,
} from "../data/Portfolios";
import Coverflow from "react-coverflow";
import { Hero, Container, Homebutton } from "../styles/portfolioStyle";
import ParticlesBg from "particles-bg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { FloatingButton, Item } from "react-floating-button";
import home from "../assets/images/buttons/home.svg";

var fn = function() {
  /* do you want */
};

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { react_portfolios, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <Container>
      <Homebutton href="/">Home</Homebutton>
      <ParticlesBg type="cobweb" bg={true} color="#ff00ff" num={200} />
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
      <br />
      <Tabs>
        <TabList>
          <Tab>React</Tab>
          <Tab>Vue</Tab>
          <Tab>Angular</Tab>
          <Tab>WordPress</Tab>
        </TabList>

        <TabPanel>
          <Gallery photos={react_portfolios} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={react_portfolios.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </TabPanel>
        <TabPanel>
          <Gallery photos={vue_portfolios} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={vue_portfolios.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </TabPanel>
        <TabPanel>
          <Gallery photos={angular_portfolios} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={angular_portfolios.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </TabPanel>
        <TabPanel>
          <Gallery photos={wordpress_portfolios} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={wordpress_portfolios.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </TabPanel>
      </Tabs>
    </Container>
  );
};
export default Portfolio;
