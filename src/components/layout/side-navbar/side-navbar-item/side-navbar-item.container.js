import React from 'react';
import PropTypes from 'prop-types';
import SideNavbarItemView from './side-navbar-item.view';

export const SideNavbarItemContainer = ({ sourceName }) => {
  const onChooseSource = () => {
    console.log('button clicked');
  };

  return <SideNavbarItemView onClick={onChooseSource} sourceName={sourceName} />;
};

SideNavbarItemContainer.propTypes = {
  sourceName: PropTypes.string.isRequired,
};

export default SideNavbarItemContainer;
