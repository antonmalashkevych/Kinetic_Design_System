import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

/** Figma: Inputs/Date field — Type */
export type DateFieldType = 'date' | 'timeframe';

export interface DateFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State */
  state?: FieldState;
  /** Figma: Type (Date / Timeframe) */
  type?: DateFieldType;
}

const CalendarIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="3" y="4.5" width="14" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 8h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/**
 * Kinetic date field — value renders in the mono token. Calendar popover is
 * app-provided; the `activated` state represents the open calendar.
 * Figma component set: Inputs/Date field (node 16610-5856).
 */
export const DateField = React.forwardRef<HTMLInputElement, DateFieldProps>(
  function DateField(
    { label, helperText, state = 'regular', type = 'date', className, disabled, id, placeholder, ...rest },
    ref,
  ) {
    return (
      <FieldBase label={label} helperText={helperText} state={state} htmlFor={id} className={className}>
        <div className="k-field__control">
          <input
            ref={ref}
            id={id}
            className="k-field__input k-field__input--mono"
            placeholder={placeholder ?? (type === 'timeframe' ? 'MM/DD/YYYY – MM/DD/YYYY' : 'MM/DD/YYYY')}
            disabled={disabled || state === 'disabled'}
            readOnly={state === 'readonly'}
            {...rest}
          />
          <span className="k-field__icon">
            <CalendarIcon />
          </span>
        </div>
      </FieldBase>
    );
  },
);

export default DateField;
