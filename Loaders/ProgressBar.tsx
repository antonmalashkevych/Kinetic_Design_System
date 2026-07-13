import React from 'react';
import './loaders.css';

export type ProgressSize = 'md' | 'xs';

export interface ProgressBarProps {
  /** 0–100 determinate value (ignored when infinite). */
  value?: number;
  /** Figma: Infinite — indeterminate animation. */
  infinite?: boolean;
  /** Figma: XS size. */
  size?: ProgressSize;
  className?: string;
}

/**
 * Kinetic progress indicator (brand orange).
 * Figma component sets: Loaders/Progress indicator + Progress indicator XS (node 4283-18667).
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0, infinite = false, size = 'md', className = '' }) => (
  <div
    className={['k-progress', size === 'xs' ? 'k-progress--xs' : '', infinite ? 'k-progress--infinite' : '', className]
      .filter(Boolean)
      .join(' ')}
    role="progressbar"
    aria-valuenow={infinite ? undefined : Math.round(value)}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="k-progress__fill" style={infinite ? undefined : { width: `${Math.max(0, Math.min(100, value))}%` }} />
  </div>
);

export default ProgressBar;
