import React from 'react';
import AlertButton from './AlertButton'; 

const Toolbar = () => {
  // Define an array of button properties
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
  ];

  return (
    <div className="toolbar">
      <h1>Dynamic Alerts</h1>
      {/* Dynamically render AlertButton components based on the buttons array */}
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;
