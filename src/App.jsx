import React from 'react';

import Header from './header/index';
import Sources from './sources/index';

import './assets/styles/tailwind.output.css';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex">
        <Sources />
      </main>
    </div>
  );
}

export default App;
