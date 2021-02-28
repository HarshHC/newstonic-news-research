import React from 'react';
import PropTypes from 'prop-types';
import { Center, Heading } from '@chakra-ui/react';

const HeaderView = ({ text }) => (
  <Center>
    <Heading as="h1">{text}</Heading>
  </Center>
);

HeaderView.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderView;
