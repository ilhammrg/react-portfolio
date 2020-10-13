import React from 'react';

import { NotFoundContainer, Text, ReturnLink } from './not-found.styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Text>Page not found</Text>
      <ReturnLink to='/'>Return Home</ReturnLink>
    </NotFoundContainer>
  );
};

export default NotFound;
