import React from 'react';

const Notification = ({ message, type = 'info' }) => {
  const styles = {
    info: { backgroundColor: '#3498db', color: 'white' },
    success: { backgroundColor: '#2ecc71', color: 'white' },
    warning: { backgroundColor: '#f39c12', color: 'white' },
    error: { backgroundColor: '#e74c3c', color: 'white' }
  };

  return (
    <div style={{ ...styles[type], padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
      {message}
    </div>
  );
};

export default Notification;
