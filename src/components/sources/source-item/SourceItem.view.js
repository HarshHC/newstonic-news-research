import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { focus, active, hover } from './SourceItem.setting';

const SourceItemView = ({ sourceName, onClick }) => {
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

SourceItemView.propTypes = {
  sourceName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SourceItemView;
