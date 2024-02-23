import React from 'react';

const MoveToTop = () => {
  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleMoveToTop} className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Move to Top
    </button>
  );
};

export default MoveToTop;
