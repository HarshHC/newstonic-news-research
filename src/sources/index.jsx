import React from 'react';

const sources = () => {
  return (
    <div className="bg-gray-100 flex flex-col w-1/4">
      <ul className="flex flex-col flex-grow overflow-y-scroll text-center">
        <li className="mt-6">Source 1</li>
        <li className="mt-6">Source 2</li>
        <li className="mt-6">Source 3</li>
      </ul>
    </div>
  );
};

export default sources;
