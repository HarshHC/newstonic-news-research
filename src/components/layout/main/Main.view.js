import React from 'react';
import { Grid } from '@chakra-ui/react';
import Sources from '../../sources';
import News from '../../news';

const MainView = () => (
  <Grid w="100%" h="100%" templateColumns="1fr 2fr">
    <Sources />
    <News />
  </Grid>
);

export default MainView;
