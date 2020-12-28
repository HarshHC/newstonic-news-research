import React from 'react';

import Categories from '../categories/index';
import NewsGallery from './NewsGallery';

const News = () => {
  return (
    <div className="flex flex-col h-screen w-3/4">
      <Categories />
      <NewsGallery />
    </div>
  );
};

export default News;
