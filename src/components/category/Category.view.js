import React from 'react';
import { Flex } from '@chakra-ui/react';
import CategorySelect from './category-select';
import CategoryPill from './category-pill';

const CategoryView = () => (
  <Flex w="100%" h="100%" alignItems="center" px="2rem" boxShadow="base">
    <CategorySelect>
      <option value="cat 1">cat 1</option>
      <option value="cat 2">cat 2</option>
    </CategorySelect>
    <Flex p="2" w="100%">
      <CategoryPill>cat 1</CategoryPill>
      <CategoryPill>cat 2</CategoryPill>
      <CategoryPill>cat 1</CategoryPill>
      <CategoryPill>cat 2</CategoryPill>
    </Flex>
  </Flex>
);

export default CategoryView;
