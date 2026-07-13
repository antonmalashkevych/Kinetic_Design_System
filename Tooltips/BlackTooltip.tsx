import React from 'react';
import './tooltips.css';

export interface BlackTooltipProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic dark ("black") tooltip — inverse surface.
 * Figma component: Tolltips/Black (node 3529-16463).
 */
export const BlackTooltip: React.FC<BlackTooltipProps> = ({ children, className = '' }) => (
  <div className={['k-tooltip', 'k-tooltip--black', className].filter(Boolean).join(' ')} role="tooltip">
    <span>{children}</span>
  </div>
);

export default BlackTooltip;
