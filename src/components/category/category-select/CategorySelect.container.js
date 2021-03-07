import React from 'react';
import PropTypes from 'prop-types';
import CategorySelectView from './CategorySelect.view';

const CategorySelectContainer = ({ children }) => <CategorySelectView>{children}</CategorySelectView>;

CategorySelectContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategorySelectContainer;
