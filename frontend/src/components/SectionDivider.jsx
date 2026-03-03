import React from 'react';

const SectionDivider = ({ flip }) => {
  return (
    <div className="relative h-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: flip
            ? 'linear-gradient(to bottom, #080808 0%, #000000 100%)'
            : 'linear-gradient(to bottom, #000000 0%, #080808 100%)'
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />
    </div>
  );
};

export default SectionDivider;
