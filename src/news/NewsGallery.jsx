import React from 'react';
import NewsItem from './NewsItem';

const NewsGallery = () => {
  return (
    <div className="content-start flex flex-wrap h-screen overflow-y-scroll p-8 w-full">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default NewsGallery;
