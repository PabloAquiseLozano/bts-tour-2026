import React from 'react';

interface SectionContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`
        py-20 px-4 md:px-8 lg:px-16
        ${dark ? 'bg-gray-900' : 'bg-background'}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
