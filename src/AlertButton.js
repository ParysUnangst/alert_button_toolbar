import React from 'react';

// AlertButton component that displays an alert with a message when clicked
const AlertButton = ({ message, children }) => {
  // Event handler for clicking the button
  const handleClick = () => alert(message);

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default AlertButton;
