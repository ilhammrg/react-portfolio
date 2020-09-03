import React from 'react';

import CustomTitle from '../../components/custom-title/custom-title.component';
import { ProjectContainer, ProjectList, ProjectCard } from './projects.styles';

const Projects = () => {
    return (
        <ProjectContainer>
            <CustomTitle>Recent Projects</CustomTitle>
            <ProjectList>
                <ProjectCard>
                    <h3>Football PWA</h3>
                    <a href="https://github.com/ilhammrg/my-league" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://my-league-apps.web.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </ProjectCard>
                <ProjectCard>
                    <h3>React Clothing</h3>
                    <a href="https://github.com/ilhammrg/react-clothing" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="/#" rel="noopener noreferrer">Live Demo</a>
                </ProjectCard>
                <ProjectCard>
                    <h3>React Portfolio</h3>
                    <a href="https://github.com/ilhammrg/react-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://ilhammrg.github.io" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </ProjectCard>
            </ProjectList>
        </ProjectContainer>
    );
};

export default Projects;