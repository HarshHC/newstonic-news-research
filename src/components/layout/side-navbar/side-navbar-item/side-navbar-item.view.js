import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { focus, active, hover } from './side-navbar-item.setting';

const SideNavbarItemView = ({ sourceName, onClick }) => {
  return (
    <Button
      _focus={focus}
      _active={active}
      _hover={hover}
      borderRadius="0"
      py="2"
      textColor="black"
      w="100%"
      onClick={onClick}
    >
      {sourceName}
    </Button>
  );
};

SideNavbarItemView.propTypes = {
  sourceName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SideNavbarItemView;
