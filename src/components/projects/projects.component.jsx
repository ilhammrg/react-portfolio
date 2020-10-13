import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProjectsData } from '../../redux/projects/projects.selectors';

import { ProjectsContainer, Title } from './projects.styles';
import ProjectItem from '../project-item/project-item.component.jsx';

const Projects = ({ projectsData }) => {
  return (
    <ProjectsContainer>
      <Title id='projects'>Projects</Title>
      {
        projectsData.map((data) => <ProjectItem data={data} key={data.id} />)
      }
    </ProjectsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  projectsData: selectProjectsData
});

export default connect(mapStateToProps)(Projects);
