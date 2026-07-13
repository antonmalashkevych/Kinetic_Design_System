import React from 'react';
import './dividers.css';

/** Figma: Foundations/Divider — orientation */
export type DividerOrientation = 'horizontal' | 'vertical';
/** Figma: Foundations/Divider — Type */
export type DividerType = 'default' | 'muted';

export interface DividerProps {
  /** Orientation (Horizontal / Vertical set) */
  orientation?: DividerOrientation;
  /** Figma: Type (Default = lines/section, Muted = lines/hairline) */
  type?: DividerType;
  className?: string;
}

/**
 * Kinetic divider (1px hairline).
 * Figma component sets: Foundations/Divider/Horizontal + /Vertical (node 1-11).
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  type = 'default',
  className = '',
}) => (
  <div
    role="separator"
    aria-orientation={orientation}
    className={['k-divider', `k-divider--${orientation}`, type === 'muted' ? 'k-divider--muted' : '', className]
      .filter(Boolean)
      .join(' ')}
  />
);

export default Divider;
