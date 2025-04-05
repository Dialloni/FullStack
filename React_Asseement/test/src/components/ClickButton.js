import React from 'react';

function ClickButton() {
  const handleClick = () => {
    console.log('Hello World');
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}

export default ClickButton;