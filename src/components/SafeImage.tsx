import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackIcon?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackIcon = 'lunch_dining',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-surface-container to-surface-container-high dark:from-zinc-800 dark:to-zinc-900 text-brand-red dark:text-red-400 p-4 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Fry Day Culinary Image'}
      >
        <span className="material-symbols-outlined text-4xl mb-2 opacity-80">
          {fallbackIcon}
        </span>
        {fallbackTitle && (
          <span className="text-xs font-display font-bold text-primary dark:text-zinc-200 line-clamp-2">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || fallbackTitle || 'Fry Day Faisalabad'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};
