import React from 'react'
import MaksimImg from '../assets/images/maksim2.png'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Maksim <span>Damaskin</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my portfolio. I am a front-end web developer who is comfortable with architecting and implementing scalable and maintainable web app/services with the TDD/BDD approach..
        </p>
        <DownloadButton href="https://github.com/RisingStar-Web/Personal-Website-Gatsby/blob/master/Updated-Resume.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={MaksimImg} alt="maksim" />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
