import React from 'react';
import { Flex } from '@chakra-ui/react';
import CategorySelect from './category-select';

const CategoryView = () => (
  <Flex w="100%" h="100%" bg="blue.100" alignItems="center" px="2rem">
    <CategorySelect>
      <option value="cat 1">cat 1</option>
      <option value="cat 2">cat 2</option>
    </CategorySelect>
  </Flex>
);

export default CategoryView;
