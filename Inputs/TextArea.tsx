import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State */
  state?: FieldState;
}

/**
 * Kinetic multi-line text area.
 * Figma component set: Inputs/Text area (node 16607-2903).
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { label, helperText, state = 'regular', className, disabled, id, ...rest },
    ref,
  ) {
    return (
      <FieldBase
        label={label}
        helperText={helperText}
        state={state}
        htmlFor={id}
        className={['k-field--textarea', className].filter(Boolean).join(' ')}
      >
        <div className="k-field__control">
          <textarea
            ref={ref}
            id={id}
            className="k-field__textarea"
            disabled={disabled || state === 'disabled'}
            readOnly={state === 'readonly'}
            {...rest}
          />
        </div>
      </FieldBase>
    );
  },
);

export default TextArea;
