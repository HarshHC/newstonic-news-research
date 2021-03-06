import React from 'react';
import { VStack, ButtonGroup } from '@chakra-ui/react';
import SourceItem from './source-item';

const SourcesView = () => (
  <ButtonGroup w="100%" size="lg" variant="link">
    <VStack bgColor="gray.200" spacing="0" w="100%">
      <SourceItem sourceName="Source 1" />
      <SourceItem sourceName="Source 2" />
    </VStack>
  </ButtonGroup>
);

export default SourcesView;
