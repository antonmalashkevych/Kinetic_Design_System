import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

export interface PhoneCountry {
  code: string;
  dial: string;
  /** Flag node (keep real flag colors — not design tokens) */
  flag?: React.ReactNode;
  label?: string;
}

export interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State */
  state?: FieldState;
  /** Selected country (dial code + flag) */
  country?: PhoneCountry;
  /** Figma: List — show the country dropdown */
  list?: boolean;
  /** Countries rendered in the dropdown */
  countries?: PhoneCountry[];
}

/**
 * Kinetic phone input — dial code + number render in the mono token; the country
 * flag keeps its real colors.
 * Figma component set: Inputs/Phone Input (node 16610-4098).
 */
export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  function PhoneInput(
    { label, helperText, state = 'regular', country, list, countries, className, disabled, id, placeholder = '(000) 000-0000', ...rest },
    ref,
  ) {
    return (
      <FieldBase label={label} helperText={helperText} state={state} htmlFor={id} className={className}>
        <div className="k-field__control">
          <span className="k-field__country">
            {country?.flag ? <span className="k-field__flag">{country.flag}</span> : null}
            <span className="k-field__dial">{country?.dial ?? '+1'}</span>
          </span>
          <input
            ref={ref}
            id={id}
            type="tel"
            className="k-field__input k-field__input--mono"
            placeholder={placeholder}
            disabled={disabled || state === 'disabled'}
            {...rest}
          />
        </div>
        {list && Array.isArray(countries) ? (
          <div className="k-field__list" role="listbox">
            {countries.map((c) => (
              <div
                key={c.code}
                role="option"
                aria-selected={c.code === country?.code}
                className="k-field__list-item"
              >
                {c.flag ? <span className="k-field__flag">{c.flag}</span> : null} {c.label ?? c.code}{' '}
                <span className="k-field__dial">{c.dial}</span>
              </div>
            ))}
          </div>
        ) : null}
      </FieldBase>
    );
  },
);

export default PhoneInput;
