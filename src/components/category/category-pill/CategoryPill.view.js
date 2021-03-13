import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from '@chakra-ui/react';

const CategoryPillView = ({ children }) => (
  <Container border="1px solid rgba(0, 0, 0, 0.2)" borderRadius="md" px="2" mx="2" h="100%" maxW="container.sm">
    <Text>{children}</Text>
  </Container>
);

CategoryPillView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategoryPillView;
