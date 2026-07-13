import React from 'react';
import type { FieldState } from './types';
import './inputs.css';

export interface FieldBaseProps {
  /** Field label (Figma: Label) */
  label?: React.ReactNode;
  /** Helper / validation text (Figma: Helper text) */
  helperText?: React.ReactNode;
  /** Field state (Figma: State) */
  state?: FieldState;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Shared shell for Kinetic input fields: label + control slot + helper text.
 * `data-state` drives the state styling in inputs.css.
 */
export const FieldBase: React.FC<FieldBaseProps> = ({
  label,
  helperText,
  state = 'regular',
  htmlFor,
  className = '',
  children,
}) => (
  <div className={['k-field', className].filter(Boolean).join(' ')} data-state={state}>
    {label != null ? (
      <label className="k-field__label" htmlFor={htmlFor}>
        {label}
      </label>
    ) : null}
    {children}
    {helperText != null ? <span className="k-field__helper">{helperText}</span> : null}
  </div>
);

export default FieldBase;
