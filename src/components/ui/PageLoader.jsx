import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-off-white">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
        <p className="mt-4 font-label text-xs uppercase tracking-widest text-grey-text animate-pulse">
          Loading SKY A Groups...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
