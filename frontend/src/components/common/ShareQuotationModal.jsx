import React from "react";

const ShareQuotationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Modal outside click close
  const handleOutside = (e) => {
    if (e.target.id === "share-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="share-overlay"
      onClick={handleOutside}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div className="bg-white w-[90%] max-w-[800px] rounded-2xl p-10 shadow-xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
            📩
          </div>
          <h2 className="text-xl font-semibold text-blue-600 border border-blue-500 px-4 py-1 rounded-full">
            Send Invoice
          </h2>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Share Your Quotation
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mt-2 mb-10">
          Trading is more effective when you connect with clients!
        </p>

        {/* Share Link */}
        <div className="mb-10">
          <label className="font-medium text-gray-700 mb-2 block">
            Share your link
          </label>

          <div className="relative">
            <input
              type="text"
              defaultValue="https://marinabudarina@gmail.com"
              className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-black"
            />
            <span className="absolute right-3 top-3 text-gray-500 text-xl">
              ⌄
            </span>
          </div>
        </div>

        {/* Share To */}
        <p className="font-medium text-gray-700 mb-5">Share to</p>

        <div className="flex items-center justify-center gap-10 mb-4">

          {/* Facebook */}
          <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <div className="bg-[#4267B2] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl">
              f
            </div>
            <p className="mt-2 text-gray-600 text-sm">Facebook</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <div className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl">
              🟢
            </div>
            <p className="mt-2 text-gray-600 text-sm">Whatsapp</p>
          </div>

          {/* Telegram */}
          <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <div className="bg-[#0088cc] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl">
              📩
            </div>
            <p className="mt-2 text-gray-600 text-sm">Telegram</p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <div className="bg-[#0A66C2] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl">
              in
            </div>
            <p className="mt-2 text-gray-600 text-sm">LinkedIn</p>
          </div>

          {/* Twitter */}
          <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
            <div className="bg-[#1DA1F2] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl">
              🐦
            </div>
            <p className="mt-2 text-gray-600 text-sm">Twitter</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShareQuotationModal;
