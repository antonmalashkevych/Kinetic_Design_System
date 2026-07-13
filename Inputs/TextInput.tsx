import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State */
  state?: FieldState;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

/**
 * Kinetic single-line text input.
 * Figma component set: Inputs/Text input (node 16607-3192).
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { label, helperText, state = 'regular', prefixIcon, suffixIcon, className, disabled, id, ...rest },
    ref,
  ) {
    return (
      <FieldBase label={label} helperText={helperText} state={state} htmlFor={id} className={className}>
        <div className="k-field__control">
          {prefixIcon ? <span className="k-field__icon">{prefixIcon}</span> : null}
          <input
            ref={ref}
            id={id}
            className="k-field__input"
            disabled={disabled || state === 'disabled'}
            readOnly={state === 'readonly'}
            {...rest}
          />
          {suffixIcon ? <span className="k-field__icon">{suffixIcon}</span> : null}
        </div>
      </FieldBase>
    );
  },
);

export default TextInput;
