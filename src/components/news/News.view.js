import React from 'react';
import { Grid } from '@chakra-ui/react';
import Category from '../category';

const NewsView = () => (
  <Grid templateRows="5rem 4fr" gap="0" h="100%" w="100%">
    <Category />
    <div>hi</div>
  </Grid>
);

export default NewsView;
