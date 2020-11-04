import React from "react";
import "../styles/tabs.css";
import proProjects from "../data/ProProjects";
import ProjectBox from "../components/Projects/ProjectBox";
import {
  ProjectsWrapper,
  ProjectsSection,
  MoreButton,
} from "../styles/projectsStyle.js";
import Layout from "../components/layout";


const Projects = () => {

  return (
    <Layout>
      <ProjectsWrapper>
        <ProjectsSection>
          {proProjects.map((item) => (
            <ProjectBox key={item.id} info={item} />
          ))}
        </ProjectsSection>
        <MoreButton href="/projects">
          Are you still interesting? Click here! 🚀
        </MoreButton>
      </ProjectsWrapper>
    </Layout>
  );
};

export default Projects;
