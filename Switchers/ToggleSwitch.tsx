import React from 'react';
import './switchers.css';

export interface ToggleSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Figma: Selected. */
  checked?: boolean;
  /** Optional label before the toggle. */
  leftLabel?: React.ReactNode;
  /** Optional label after the toggle. */
  rightLabel?: React.ReactNode;
}

/**
 * Kinetic toggle switch (indigo handle when on).
 * Figma component set: Switcher/General (node 13280-181599).
 */
export const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function ToggleSwitch({ checked = false, leftLabel, rightLabel, disabled, id, className = '', ...rest }, ref) {
    return (
      <label
        className={['k-toggle', className].filter(Boolean).join(' ')}
        data-checked={checked || undefined}
        data-disabled={disabled || undefined}
        htmlFor={id}
      >
        {leftLabel != null ? <span className="k-toggle__side">{leftLabel}</span> : null}
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          className="k-toggle__input"
          checked={checked}
          disabled={disabled}
          readOnly
          {...rest}
        />
        <span className="k-toggle__track">
          <span className="k-toggle__handle" />
        </span>
        {rightLabel != null ? <span className="k-toggle__side">{rightLabel}</span> : null}
      </label>
    );
  },
);

export default ToggleSwitch;
