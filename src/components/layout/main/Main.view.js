import React from 'react';
import { Grid } from '@chakra-ui/react';
import { SideNavbarContainer } from '../side-navbar';

const MainView = () => (
  <Grid templateColumns="1fr 2fr">
    <SideNavbarContainer />
    <div>hello</div>
  </Grid>
);

export default MainView;
