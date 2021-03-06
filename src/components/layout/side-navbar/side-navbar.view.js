import React from 'react';
import { VStack, ButtonGroup } from '@chakra-ui/react';
import { SideNavbarItemContainer } from './side-navbar-item';

export const SideNavbarView = () => (
  <ButtonGroup w="100%" size="lg" variant="link">
    <VStack bgColor="gray.200" spacing="0" w="100%">
      <SideNavbarItemContainer sourceName="Source 1" />
      <SideNavbarItemContainer sourceName="Source 2" />
    </VStack>
  </ButtonGroup>
);

export default SideNavbarView;
