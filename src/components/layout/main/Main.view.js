import React from 'react';
import { Grid } from '@chakra-ui/react';
import Sources from '../../sources';

const MainView = () => (
  <Grid templateColumns="1fr 2fr">
    <Sources />
    <div>hello</div>
  </Grid>
);

export default MainView;
