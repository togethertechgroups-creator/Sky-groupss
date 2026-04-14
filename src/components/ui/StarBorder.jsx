import React from 'react';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  containerClassName = '',
  color = '#D4A017', 
  speed = '4s',
  children,
  ...props
}) => {
  return (
    <Component className={`relative inline-flex overflow-hidden rounded-sm p-[2px] group cursor-pointer ${containerClassName}`} {...props}>
      <span 
        className="absolute z-0 animate-spin" 
        style={{
          width: '500%',
          height: '500%',
          top: '-200%',
          left: '-200%',
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 80%, ${color === 'magenta' ? '#D4A017' : color} 100%)`,
          animationDuration: speed
        }}
      />
      <span className={`relative z-10 flex h-full w-full items-center justify-center bg-charcoal rounded-[2px] transition-all duration-300 group-hover:bg-[#222] text-white ${className}`}>
        {children}
      </span>
    </Component>
  );
};

export default StarBorder;
