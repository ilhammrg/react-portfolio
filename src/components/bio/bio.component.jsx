import React from 'react';

import { 
  BioContainer, 
  Title, 
  Paragraf, 
  Links 
} from './bio.styles';

const Bio = () => {
  return (
    <BioContainer>
      <Title>Hi, I'm Ilham</Title>
      <Paragraf>I'm a software engineer from Bandung, Indonesia. I build web using React and Redux. In my spare time, I build some <Links href='#projects'>side projects</Links> and wrote <Links href='https://soundcloud.com/ilhammrg' target='_blank' rel='noreferrer'>instrumental music</Links>.</Paragraf>
    </BioContainer>
  );
};

export default Bio;