import React from 'react';
import './tooltips.css';

export interface TooltipProps {
  /** Figma: Headline — optional bold headline above the body. */
  headline?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic surface tooltip (bg/card).
 * Figma component set: Tooltip (node 3529-16463).
 */
export const Tooltip: React.FC<TooltipProps> = ({ headline, children, className = '' }) => (
  <div className={['k-tooltip', 'k-tooltip--surface', className].filter(Boolean).join(' ')} role="tooltip">
    {headline != null ? <span className="k-tooltip__headline">{headline}</span> : null}
    <span>{children}</span>
  </div>
);

export default Tooltip;
