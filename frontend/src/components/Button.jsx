import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  icon,
  ariaLabel,
  ...props
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    const isAnchor = href.startsWith('#');
    const isExternal = href.startsWith('http') || href.startsWith('mailto');

    const handleClick = (e) => {
      if (isAnchor) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (onClick) onClick(e);
    };

    return (
      <a
        href={href}
        className={baseClasses}
        onClick={handleClick}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
