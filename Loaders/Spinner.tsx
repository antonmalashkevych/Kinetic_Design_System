import React from 'react';
import './loaders.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  size?: SpinnerSize;
  'aria-label'?: string;
  className?: string;
}

/**
 * Kinetic spinner loader (brand orange).
 * Figma component set: Loaders/Spiner loader (node 4283-18667).
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '', ...rest }) => (
  <span
    role="status"
    aria-label={rest['aria-label'] || 'Loading'}
    className={['k-spinner', size !== 'md' ? `k-spinner--${size}` : '', className].filter(Boolean).join(' ')}
  />
);

export default Spinner;
