import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-text: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 10%;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    flex-direction: column;
  }
`;
export const Homebutton = styled.a`
  background-color: blue;
  border-radius: 10px 10px 10px 10px;
  color: white;
  position: fixed;
  margin: 20px;
  padding: 5px 15px 5px 15px;
  float: left;
  top: 0px;
  z-index: 99999;
`;
export const Container = styled.div``;
