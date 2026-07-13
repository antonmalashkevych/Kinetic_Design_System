import React from 'react';
import { Tooltip } from './Tooltip';
import './tooltips.css';

export interface InfoTooltipProps {
  /** Figma: Tooltip — whether the info popup is shown. */
  open?: boolean;
  /** Tooltip content shown when open. */
  children?: React.ReactNode;
  'aria-label'?: string;
  className?: string;
}

const InfoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 7.2v3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="5.2" r="0.6" fill="currentColor" />
  </svg>
);

/**
 * Kinetic info trigger with an optional tooltip popup.
 * Figma component set: Tolltips/Infoblock (node 3529-16463).
 */
export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  open = false,
  children,
  className = '',
  'aria-label': ariaLabel = 'More info',
}) => (
  <span className={['k-info-tooltip', className].filter(Boolean).join(' ')}>
    <span className="k-info-tooltip__icon" role="img" aria-label={ariaLabel}>
      <InfoIcon />
    </span>
    {open ? <Tooltip>{children}</Tooltip> : null}
  </span>
);

export default InfoTooltip;
