import React from 'react';
import { Flex, Select } from '@chakra-ui/react';

const CategoryView = () => (
  <Flex>
    <Select placeholder="Select a category" value="Select a category">
      <option value="cat 1">cat 1</option>
      <option value="cat 2">cat 2</option>
    </Select>
  </Flex>
);

export default CategoryView;
