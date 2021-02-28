import React from 'react';
import PropTypes from 'prop-types';
import HeaderView from './Header.view';

export const HeaderContainer = ({ text }) => <HeaderView text={text} />;

HeaderContainer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderContainer;
