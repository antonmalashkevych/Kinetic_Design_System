import React from 'react';
import './avatars.css';

/** Figma: Primitives/Avatars — Type */
export type AvatarType = 'initials' | 'image' | 'placeholder';
/** Figma: Primitives/Avatars — Size */
export type AvatarSize = 'lg' | 'md' | 'sm';

export interface AvatarProps {
  /** Figma: Type (Initials / Image / Placeholder) */
  type?: AvatarType;
  /** Figma: Size (lg 40 / md 32 / sm 24) */
  size?: AvatarSize;
  /** Initials text (type="initials") */
  initials?: string;
  /** Image source (type="image") */
  src?: string;
  /** Accessible label / alt text */
  alt?: string;
  /** Optional placeholder icon override (type="placeholder") */
  icon?: React.ReactNode;
  className?: string;
}

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="60%" height="60%">
    <circle cx="12" cy="9" r="3.4" fill="currentColor" />
    <path d="M5 19c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" fill="currentColor" />
  </svg>
);

/**
 * Kinetic avatar.
 * Figma component set: Primitives/Avatars (node 1-9).
 */
export const Avatar: React.FC<AvatarProps> = ({
  type = 'image',
  size = 'lg',
  initials,
  src,
  alt = '',
  icon,
  className = '',
}) => {
  const cls = ['k-avatar', `k-avatar--${size}`, `k-avatar--${type}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={cls} role="img" aria-label={alt || initials || 'avatar'}>
      {type === 'image' && src ? (
        <img className="k-avatar__img" src={src} alt={alt} />
      ) : null}
      {type === 'initials' ? (
        <span className="k-avatar__initials">{initials}</span>
      ) : null}
      {type === 'placeholder' ? (
        <span className="k-avatar__placeholder">{icon ?? <PersonIcon />}</span>
      ) : null}
    </span>
  );
};

export default Avatar;
