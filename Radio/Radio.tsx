import React from 'react';
import './radio.css';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Figma: Selected. */
  checked?: boolean;
  /** Figma: Label — show the text label. */
  showLabel?: boolean;
  label?: React.ReactNode;
}

/**
 * Kinetic radio button.
 * Figma component set: Radio (node 13280-181601).
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio({ checked = false, showLabel = true, label, disabled, id, className = '', ...rest }, ref) {
    return (
      <label
        className={['k-radio', className].filter(Boolean).join(' ')}
        data-checked={checked || undefined}
        data-disabled={disabled || undefined}
        htmlFor={id}
      >
        <input
          ref={ref}
          id={id}
          type="radio"
          className="k-radio__input"
          checked={checked}
          disabled={disabled}
          readOnly
          {...rest}
        />
        <span className="k-radio__circle">{checked ? <span className="k-radio__dot" /> : null}</span>
        {showLabel && label != null ? <span>{label}</span> : null}
      </label>
    );
  },
);

export default Radio;
