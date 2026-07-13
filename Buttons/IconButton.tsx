import React from 'react';
import './buttons.css';

/** Figma: Buttons/Icon button — Accent */
export type IconButtonAccent = 'primary' | 'secondary' | 'button';
/** Figma: Buttons/Icon button — Shape */
export type IconButtonShape = 'round' | 'rectangle';
/** Figma: Buttons/Icon button — Size */
export type IconButtonSize = 'medium' | 'small';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Accent (Primary / Secondary / Button) */
  accent?: IconButtonAccent;
  /** Figma: Shape (Round / Rectangle) */
  shape?: IconButtonShape;
  /** Figma: Size (Medium / Small) */
  size?: IconButtonSize;
  /** Figma: Fill — solid surface (true) or ghost/transparent (false) */
  fill?: boolean;
  /** The icon node */
  icon: React.ReactNode;
  /** Accessible label (icon-only button) */
  'aria-label': string;
}

/**
 * Kinetic icon button.
 * Figma component set: Buttons/Icon button (node 16606-1518).
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      accent = 'primary',
      shape = 'round',
      size = 'medium',
      fill = true,
      icon,
      disabled,
      className = '',
      ...rest
    },
    ref,
  ) {
    const cls = [
      'k-icon-btn',
      `k-icon-btn--${accent}`,
      `k-icon-btn--${shape}`,
      `k-icon-btn--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={cls}
        data-fill={fill ? 'true' : 'false'}
        disabled={disabled}
        {...rest}
      >
        <span className="k-icon-btn__icon">{icon}</span>
      </button>
    );
  },
);

export default IconButton;
