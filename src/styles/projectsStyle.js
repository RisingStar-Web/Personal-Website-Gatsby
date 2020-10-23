import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  padding-top: 10%;
  padding-bottom: 5%;
`
export const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 10%;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    flex-direction: column;
  }
`
export const MoreButton = styled.a`
  width: 100%;
  height: 71px;
  margin: 1em 0 0.1em 0;
	color: red;
	font-weight: normal;
	font-family: 'Ultra', sans-serif;   
	font-size: 32px;
  line-height: 42px;
  letter-spacing:4px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom:solid 2px red;
	text-shadow: 0 2px white, 0 2px #777;
  :hover{
    color: #7fa1e8;
    border-bottom:solid 2px #7fa1e8;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`
