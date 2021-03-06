import React from 'react';
import { Box } from '@chakra-ui/react';
import { Header, Main } from './components/layout';

function App() {
  return (
    <Box w="100vw" h="100vh">
      <Header text="Newstonic" />
      <Main />
    </Box>
  );
}

export default App;
