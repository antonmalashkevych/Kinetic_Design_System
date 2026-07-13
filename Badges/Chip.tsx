import React from 'react';
import './badges.css';

/** Figma: Badges/Chips — State */
export type ChipState = 'default' | 'highlighted';

export interface ChipProps {
  /** Figma: State (Default / Highlighted) */
  state?: ChipState;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic chip.
 * Figma component set: Badges/Chips (node 1711-9092).
 */
export const Chip: React.FC<ChipProps> = ({ state = 'default', children, className = '' }) => (
  <span className={['k-chip', `k-chip--${state}`, className].filter(Boolean).join(' ')}>{children}</span>
);

export default Chip;
