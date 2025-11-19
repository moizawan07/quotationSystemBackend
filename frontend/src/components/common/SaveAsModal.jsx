import React, { useEffect } from "react";

const SaveAsModal = ({ onClose, isOpen }) => {
  if (!isOpen) return null;

  // Close when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-2xl w-[90%] max-w-[800px] p-8 shadow-xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
            💾
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Save As</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          
          {/* New Folder */}
          <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
            <span className="text-4xl mb-2">➕</span>
            <p className="font-medium text-gray-700">New Folder</p>
          </div>

          {/* Browser */}
          <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
            <span className="text-4xl mb-2">🌐</span>
            <p className="font-medium text-gray-700">Browser</p>
          </div>

        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-6">

          {/* File Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">File Name :</label>
            <input
              type="text"
              placeholder="Ex. Download, Picture, etc"
              className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Save As Type */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Save as type :</label>
            <select className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-black">
              <option value="pdf">Ex. PDF</option>
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
            </select>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-end gap-4">
          <button
            className="px-8 py-2 rounded-lg border border-gray-500 text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-10 py-2 rounded-lg bg-black text-white shadow-sm hover:bg-gray-900"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default SaveAsModal;
