import React from 'react';
import './tooltips.css';

/** Validation severity. Warning uses semantic/warning, error uses semantic/error. */
export type ValidationSeverity = 'warning' | 'error';

export interface ValidationTooltipProps {
  /** Severity — warning (amber) or error (red). */
  severity?: ValidationSeverity;
  /** Figma: Short/Long — allow multi-line messages. */
  multiline?: boolean;
  /** Message text. */
  children?: React.ReactNode;
  className?: string;
}

const AlertTriangle = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2.5l6 11H2l6-11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M8 7v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="11.6" r="0.5" fill="currentColor" />
  </svg>
);
const AlertCircle = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 4.8v3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="10.8" r="0.5" fill="currentColor" />
  </svg>
);

/**
 * Kinetic validation tooltip — modern elevated chip, no caret.
 * Figma component set: Tolltips/Validation (node 3529-16463).
 */
export const ValidationTooltip: React.FC<ValidationTooltipProps> = ({
  severity = 'warning',
  multiline = false,
  children,
  className = '',
}) => (
  <div
    role="alert"
    className={['k-validation-tooltip', severity === 'error' ? 'k-validation-tooltip--error' : '', className]
      .filter(Boolean)
      .join(' ')}
    style={multiline ? undefined : { whiteSpace: 'nowrap' }}
  >
    <span className="k-validation-tooltip__icon">
      {severity === 'error' ? <AlertCircle /> : <AlertTriangle />}
    </span>
    <span>{children}</span>
  </div>
);

export default ValidationTooltip;
