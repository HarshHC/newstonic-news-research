import React from 'react';

const NewsItem = () => {
  return (
    <div className="bg-blue-200 flex flex-col h-56 mx-6 mb-12 w-52 p-4">
      <h2 className="mb-2 text-2xl">News Title</h2>
      <p className="overflow-hidden text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat
        convallis neque, et pellentesque purus ornare vitae. Fusce imperdiet
        facilisis nisi sit amet euismod. Nullam rutrum, nibh at ultricies
        suscipit, purus orci tristique erat, tincidunt pretium ex erat non mi.
        Pellentesque urna erat, scelerisque vel cursus sed, varius sed ligula.
        Integer blandit nisi efficitur arcu euismod, nec aliquet dui ultricies.
        Suspendisse porttitor magna in tellus lobortis, at tincidunt lorem
        lacinia. Pellentesque sed volutpat felis. Sed sit amet arcu a metus
        fermentum volutpat eget ac neque. Vivamus ultricies suscipit enim sit
        amet consequat. Vivamus quis tortor vitae massa condimentum maximus. In
        sit amet sem risus.
      </p>
    </div>
  );
};

export default NewsItem;
