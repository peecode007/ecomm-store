import React, { useState } from 'react';

const ViewToggle = () => {
  const [view, setView] = useState('grid');

  return (
    <div className="mb-4">
      <button
        onClick={() => setView('grid')}
        className={`mr-2 ${view === 'grid' ? 'bg-gray-700 text-white' : 'bg-gray-300'} px-3 py-1 rounded`}
      >
        Grid
      </button>
      <button
        onClick={() => setView('list')}
        className={`${view === 'list' ? 'bg-gray-700 text-white' : 'bg-gray-300'} px-3 py-1 rounded`}
      >
        List
      </button>
      {/* Integrate search functionality */}
      <input
        type="text"
        placeholder="Search products..."
        className="ml-4 p-2 rounded bg-gray-100"
        onChange={(e) => {/* Implement search logic */}}
      />
    </div>
  );
};

export default ViewToggle;