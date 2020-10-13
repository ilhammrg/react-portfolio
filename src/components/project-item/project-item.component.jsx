import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColors } from '../../redux/themes/themes.selectors';

import { 
  ProjectItemContainer, 
  Thumbnail, 
  Details, 
  Title, 
  Description, 
  Tags, 
  Tag 
} from './project-item.styles';
import dummy from './dummy.jpg';

const ProjectItem = ({ colors, data }) => {
  const { bg1, bg2, bg3, font1, font4, shadow1, shadow2 } = colors;
  const { title, description, url, tags } = data;

  return (
    <ProjectItemContainer bg={bg1} shadow1={shadow1} shadow2={shadow2} href={url} rel='noreferrer' target='_blank'>
      <Thumbnail src={dummy} alt='dummy' bg={bg3} />
      <Details>
        <Title>{title}</Title>
        <Description font={font1}>{description}</Description>
        <Tags>
          {
            tags.map((tag, index) => <Tag key={index} bg={bg2} font={font4}>{tag}</Tag>)
          }
        </Tags>
      </Details>
    </ProjectItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  colors: selectColors,
});

export default connect(mapStateToProps)(ProjectItem);
