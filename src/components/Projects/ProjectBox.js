"use strict"

import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Box = styled.div`
  max-width: 450px;
  width: 35%;
  min-height: 470px;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-out;
  background-color: #fff;
  margin: 0 4% 4%;
  :hover {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
  }
  @media (max-width: 700px) {
    width: 100%;
    min-height: auto;
    max-width: fit-content;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    width: 100%;
    min-height: auto;
    box-sizing: border-box;
    max-width: 100%;
    margin: 0 0 4%;
  }
`;
const BoxIcon = styled.a`
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4%;
  box-sizing: border-box;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #5397f9;
  img {
    width: 35%;
    margin-right: 5%;
    margin-bottom: 0;
  }
  h3 {
    margin: 0;
    flex: 1;
    color: white;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    img {
      width: 10%;
    }
  }
`;
const BoxDescription = styled.div`
  padding: 5%;
  flex-direction: column;
  display: FLEX;
  height: calc(100% - 120px);
  p {
    color: #0f1645;
  }
  a {
    color: #7fa1e8;
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin: 0 0 10px;
    text-decoration: none;
  }
`;
const BoxStack = styled.div`
  margin-top: auto;
  p {
    margin: 0;
  }
`;
const ProjectBox = ({ info }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <Box>
      <BoxIcon href={info.demoPath} target="_blank">
        <img src={info.icon} alt="roy project icon" />
        <h3>{info.title}</h3>
      </BoxIcon>
      <BoxDescription>
        <div>
          <Gallery photos={info.images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={info.images.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <br />
        <p> {info.description}</p>
        <BoxStack>
          {info.githubPath != null ? (
            <a href={info.githubPath}>On Github </a>
          ) : (
            ""
          )}
          {info.demoPath != null ? (
            <a href={info.demoPath}>Visit website </a>
          ) : (
            ""
          )}
          <p>Development year - {info.year} </p>
          <p>Technology stack - {info.techUsed} </p>
        </BoxStack>
      </BoxDescription>
    </Box>
  );
};

export default ProjectBox;
