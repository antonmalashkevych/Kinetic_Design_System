import React from 'react';
import './stepper.css';

/** Figma: Navigation/Atom/Stepper — State. */
export type StepState = 'inactive' | 'current' | 'done' | 'interacted';

export interface StepProps {
  /** Figma: State. */
  state?: StepState;
  label?: React.ReactNode;
  className?: string;
}

const Check = () => (
  <svg viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M1.5 4.2l1.6 1.6L6.6 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Kinetic step indicator.
 * Figma component set: Navigation/Atom/Stepper (node 13331-185125).
 */
export const Step: React.FC<StepProps> = ({ state = 'inactive', label, className = '' }) => (
  <span className={['k-step', className].filter(Boolean).join(' ')} data-state={state}>
    <span className="k-step__dot">{state === 'done' ? <Check /> : null}</span>
    {label != null ? <span className="k-step__label">{label}</span> : null}
  </span>
);

export default Step;
