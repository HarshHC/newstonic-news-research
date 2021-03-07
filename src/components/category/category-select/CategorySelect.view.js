import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/react';

const CategoryView = ({ children }) => (
  <Select placeholder="Select a category" value="Select a category" w="15rem">
    {children}
  </Select>
);

CategoryView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategoryView;
