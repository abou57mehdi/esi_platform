import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center justify-center">
        {/* Main logo with circular spinning effect */}
        <div className="relative mb-8">
          <img
            src="/assets/images/esi_traingle.png"
            alt="ESI Logo"
            className="w-24 h-24 object-contain animate-spin"
          />
          {/* Circular border effect */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-20"></div>
        </div>

        <p className="text-blue-600 font-medium mt-4">Chargement en cours...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;