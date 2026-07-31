import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'var(--bg-void)' }}>
      <div className="text-center" style={{ fontFamily: 'var(--font-mono)' }}>
        {/* Animated Logo/Initial */}
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-md text-2xl font-bold animate-pulse"
            style={{ backgroundColor: 'var(--grant-amber)', color: 'var(--bg-void)' }}
          >
            B
          </div>
        </div>

        {/* Loading Animation */}
        <div className="loading-dots mb-6">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Loading Text */}
        <div>
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--signal-white)' }}>
            {'>'} initializing portfolio…
          </p>
          <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>
            spinning up the access log…
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;