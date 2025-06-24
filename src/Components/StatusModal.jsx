// Components/StatusModal.jsx
import React from "react";

const StatusModal = ({ title, status, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-6 max-w-md w-full relative">
        <h3 className="text-xl font-bold mb-4">{title} – Progress</h3>
        <ul className="list-disc pl-5 space-y-1">
          {status.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-red-600 font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default StatusModal;
