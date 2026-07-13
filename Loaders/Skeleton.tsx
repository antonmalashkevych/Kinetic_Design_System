import React from 'react';
import './loaders.css';

export type SkeletonTone = 'dark' | 'orange';

export interface SkeletonProps {
  /** Figma: Background (Dark / Orange). Light dropped (dark theme only). */
  tone?: SkeletonTone;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  className?: string;
}

/**
 * Kinetic skeleton loader block.
 * Figma component set: Loaders/Atoms/Skeleton loader (node 4283-18667).
 */
export const Skeleton: React.FC<SkeletonProps> = ({ tone = 'dark', width = '100%', height = 12, radius, className = '' }) => (
  <span
    className={['k-skeleton', tone === 'orange' ? 'k-skeleton--orange' : '', className].filter(Boolean).join(' ')}
    style={{ width, height, ...(radius != null ? { borderRadius: radius } : null) }}
    aria-hidden="true"
  />
);

export default Skeleton;
