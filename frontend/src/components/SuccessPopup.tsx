// src/components/SuccessPopup.tsx
import React from "react";
import "./SuccessPopup.css";

interface Props {
  message: string;
  onClose: () => void;
}

const SuccessPopup: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="popup-backdrop">
      <div className="popup-box">
        <h3>✅ Success</h3>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
