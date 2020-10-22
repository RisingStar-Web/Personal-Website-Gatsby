import React from "react";
import "../styles/tabs.css";
import proProjects from "../data/ProProjects";
import ProjectBox from "../components/Projects/ProjectBox";
import { ProjectsWrapper, ProjectsSection } from "../styles/projectsStyle.js";
import Layout from "../components/layout";

const Projects = () => (
  <Layout>
    <ProjectsWrapper>
      <ProjectsSection>
        {proProjects.map((item) => (
          <ProjectBox key={item.id} info={item} />
        ))}
      </ProjectsSection>
    </ProjectsWrapper>
  </Layout>
);

export default Projects;
