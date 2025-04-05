import React from 'react';
import './popup.css'; // Add styles for the popup

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Access Restricted</h2>
        <p>You need to log in or create an account to access the dashboard content.</p>
        <div className="popup-buttons">
          <button onClick={() => window.location.href = '/login'}>Log In</button>
          <button onClick={() => window.location.href = '/register'}>Create Account</button>
        </div>
       {/* <button className="popup-close" onClick={onClose}>Close</button>*/}
      </div>
    </div>
  );
};

export default Popup;