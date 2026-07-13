import React from 'react';
import './checkboxes.css';

/** Figma: Checkboxes/General — Position (Selected / Inactive / Indeterminate). */
export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  /** Checkbox state (maps from Figma Position). */
  state?: CheckboxState;
  /** Figma: Label — show the text label. */
  showLabel?: boolean;
  /** Label text. */
  label?: React.ReactNode;
}

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.2l2.3 2.3L9.5 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DashIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3 6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/**
 * Kinetic checkbox.
 * Figma component set: Checkboxes/General (node 13280-181600).
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { state = 'unchecked', showLabel = true, label, disabled, id, className = '', ...rest },
    ref,
  ) {
    return (
      <label
        className={['k-checkbox', className].filter(Boolean).join(' ')}
        data-state={state}
        data-disabled={disabled || undefined}
        htmlFor={id}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="k-checkbox__input"
          checked={state === 'checked'}
          disabled={disabled}
          aria-checked={state === 'indeterminate' ? 'mixed' : state === 'checked'}
          readOnly
          {...rest}
        />
        <span className="k-checkbox__box">
          {state === 'checked' ? <CheckIcon /> : null}
          {state === 'indeterminate' ? <DashIcon /> : null}
        </span>
        {showLabel && label != null ? <span>{label}</span> : null}
      </label>
    );
  },
);

export default Checkbox;
