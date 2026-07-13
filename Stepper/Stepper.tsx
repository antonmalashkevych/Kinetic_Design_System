import React from 'react';
import { Step } from './Step';
import './stepper.css';

export interface StepperProps {
  /** Step labels. */
  steps?: React.ReactNode[];
  /** Current step (1-based). Steps before it render as done. */
  current?: number;
  className?: string;
}

/**
 * Kinetic stepper (steps + connectors).
 * Figma component set: Navigation/Stepper (node 13331-185125).
 */
export const Stepper: React.FC<StepperProps> = ({ steps = [], current = 1, className = '' }) => (
  <div className={['k-stepper', className].filter(Boolean).join(' ')} role="list">
    {steps.map((label, i) => {
      const n = i + 1;
      const state = n < current ? 'done' : n === current ? 'current' : 'inactive';
      return (
        <React.Fragment key={i}>
          {i > 0 ? <span className="k-stepper__connector" data-done={n <= current || undefined} /> : null}
          <Step state={state} label={label} />
        </React.Fragment>
      );
    })}
  </div>
);

export default Stepper;
