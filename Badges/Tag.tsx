import React from 'react';
import './badges.css';

/** Figma: Badges/Tag — Color */
export type TagColor = 'grey' | 'brand';

export interface TagProps {
  /** Figma: Color (Grey / Brand) */
  color?: TagColor;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic tag.
 * Figma component set: Badges/Tag (node 1711-9092).
 */
export const Tag: React.FC<TagProps> = ({ color = 'grey', children, className = '' }) => (
  <span className={['k-tag', `k-tag--${color}`, className].filter(Boolean).join(' ')}>{children}</span>
);

export default Tag;
