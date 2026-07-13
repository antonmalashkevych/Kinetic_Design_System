import React from 'react';
import './badges.css';

export type BadgeDotTone =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'brand'
  | 'interactive';

export interface BadgeDotProps {
  /** Color tone (default neutral = white) */
  tone?: BadgeDotTone;
  className?: string;
  'aria-label'?: string;
}

/**
 * Kinetic status dot.
 * Figma component: Badges/Dot (node 1711-9092).
 */
export const BadgeDot: React.FC<BadgeDotProps> = ({ tone = 'neutral', className = '', ...rest }) => (
  <span
    className={['k-badge-dot', tone !== 'neutral' ? `k-badge-dot--${tone}` : '', className]
      .filter(Boolean)
      .join(' ')}
    {...rest}
  />
);

export default BadgeDot;
