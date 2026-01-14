// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-in-out rounded uppercase tracking-wider';
  
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
    ghost: 'text-white/60 hover:text-white hover:bg-white/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;