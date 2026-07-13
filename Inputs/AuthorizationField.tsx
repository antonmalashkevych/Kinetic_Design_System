import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

/** Figma: Inputs/Authorization fields — Field type */
export type AuthorizationFieldType =
  | 'clientId'
  | 'username'
  | 'password'
  | 'dropdown'
  | 'phoneNumber'
  | 'verificationCode'
  | 'textInput'
  | 'clientIdDropdown';

export interface AuthorizationFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State (derived here from `selected` + native) */
  state?: FieldState;
  /** Figma: Field type */
  fieldType?: AuthorizationFieldType;
  /** Figma: Selected */
  selected?: boolean;
}

/** Codes / phone values use mono; other auth fields use sans. */
const MONO_TYPES: AuthorizationFieldType[] = ['verificationCode', 'phoneNumber', 'clientId', 'clientIdDropdown'];

/**
 * Kinetic authorization field (client id, username, password, code, etc.).
 * Figma component set: Inputs/Authorization fields (node 16610-7492).
 */
export const AuthorizationField = React.forwardRef<HTMLInputElement, AuthorizationFieldProps>(
  function AuthorizationField(
    { label, helperText, state = 'regular', fieldType = 'clientId', selected, className, disabled, id, ...rest },
    ref,
  ) {
    const isPassword = fieldType === 'password';
    const isMono = MONO_TYPES.includes(fieldType);
    const effectiveState: FieldState = selected ? 'activated' : state;
    return (
      <FieldBase label={label} helperText={helperText} state={effectiveState} htmlFor={id} className={className}>
        <div className="k-field__control">
          <input
            ref={ref}
            id={id}
            type={isPassword ? 'password' : 'text'}
            className={['k-field__input', isMono ? 'k-field__input--mono' : ''].filter(Boolean).join(' ')}
            disabled={disabled || state === 'disabled'}
            {...rest}
          />
        </div>
      </FieldBase>
    );
  },
);

export default AuthorizationField;
