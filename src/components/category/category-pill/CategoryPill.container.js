import React from 'react';
import PropTypes from 'prop-types';
import CategoryPillView from './CategoryPill.view';

const CategoryPillContainer = ({ children }) => <CategoryPillView>{children}</CategoryPillView>;

CategoryPillContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategoryPillContainer;
