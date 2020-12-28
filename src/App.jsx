import React from 'react';

import Header from './header/index';
import News from './news/index';
import Sources from './sources/index';

import './assets/styles/tailwind.output.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-grow">
        <Sources />
        <News />
      </main>
    </div>
  );
}

export default App;
