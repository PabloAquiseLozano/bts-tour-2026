'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = false,
}) => {
  return (
    <div
      className={`
        rounded-2xl overflow-hidden
        ${glass ? 'glass-effect' : 'bg-secondary'}
        ${hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-white mb-2 ${className}`}>{children}</h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => (
  <p className={`text-gray-400 ${className}`}>{children}</p>
);

export default Card;
