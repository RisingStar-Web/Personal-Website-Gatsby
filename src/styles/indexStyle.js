import styled from 'styled-components'

export const UserWrapper = styled.div`
  margin: 10% auto;
`;
export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: #ffffff;
  span{
    color: #7fa1e8;
  }
  @media (max-width: 700px) {
    font-size: 3em;
    text-align: center;
  }
`;
export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 10%;
  p{
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 8%;
  }
  img{
    max-width: 30%;
    margin-top:-250px;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    img{
      max-width: 100%;
      margin-top: 0px;
    }
    p{
      max-width: 100%;
      font-size: 19px;
    }
  }
`;
export const DownloadButton = styled.a`
  width: 298px;
  height: 71px;
  background-color: rgba(68, 68, 255, 0.3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: CENTER;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  :hover{
    color: #7fa1e8;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`
export const UserTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`