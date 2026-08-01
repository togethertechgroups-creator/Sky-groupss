import React from 'react';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  containerClassName = '',
  color = 'var(--color-gold-primary)', 
  speed = '4s',
  children,
  style = {},
  ...props
}) => {
  return (
    <Component 
      style={{
        position: 'relative',
        display: 'inline-flex',
        overflow: 'hidden',
        padding: '2px',
        cursor: 'pointer',
        border: 'var(--border-brutal-width) solid var(--color-charcoal)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-brutal)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style
      }}
      className={`group ${containerClassName}`} 
      {...props}
    >
      <span 
        className="animate-spin-slow" 
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '500%',
          height: '500%',
          top: '-200%',
          left: '-200%',
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 80%, var(--color-gold-primary) 100%)`,
          animationDuration: speed
        }}
      />
      <span 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-charcoal)',
          color: 'var(--color-gold-light)',
          fontFamily: 'var(--font-label)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          borderRadius: 'calc(var(--radius-card) - 2px)',
          transition: 'all 0.2s ease'
        }}
        className={className}
      >
        {children}
      </span>
    </Component>
  );
};

export default StarBorder;
