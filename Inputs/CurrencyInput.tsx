import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

export interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State */
  state?: FieldState;
  /** Leading currency symbol / code */
  currencySymbol?: string;
}

/**
 * Kinetic currency input — value renders in the mono token (tabular numerals).
 * Figma component set: Inputs/Currency Input (node 16610-3185).
 */
export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  function CurrencyInput(
    { label, helperText, state = 'regular', currencySymbol = '$', className, disabled, id, ...rest },
    ref,
  ) {
    return (
      <FieldBase label={label} helperText={helperText} state={state} htmlFor={id} className={className}>
        <div className="k-field__control">
          <span className="k-field__affix">{currencySymbol}</span>
          <input
            ref={ref}
            id={id}
            inputMode="decimal"
            className="k-field__input k-field__input--mono"
            disabled={disabled || state === 'disabled'}
            readOnly={state === 'readonly'}
            {...rest}
          />
        </div>
      </FieldBase>
    );
  },
);

export default CurrencyInput;
