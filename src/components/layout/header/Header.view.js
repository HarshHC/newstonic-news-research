import React from 'react';
import PropTypes from 'prop-types';
import { Center, Heading } from '@chakra-ui/react';

const HeaderView = ({ text }) => (
  <Center borderBottom="1px solid rgba(0, 0, 0, .1)" py="2">
    <Heading as="h1">{text}</Heading>
  </Center>
);

HeaderView.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderView;
