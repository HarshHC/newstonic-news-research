import React from 'react';
import PropTypes from 'prop-types';
import SourceItemView from './SourceItem.view';

const SourceItemContainer = ({ sourceName }) => {
  const onChooseSource = () => {
    console.log('button clicked');
  };

  return <SourceItemView onClick={onChooseSource} sourceName={sourceName} />;
};

SourceItemContainer.propTypes = {
  sourceName: PropTypes.string.isRequired,
};

export default SourceItemContainer;
