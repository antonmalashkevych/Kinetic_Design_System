import React from 'react';
import './switchers.css';

/** Figma: Selections/Arrow switches — Size. */
export type ArrowSwitchSize = 'small' | 'medium' | 'large';

export interface ArrowSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Chevron direction. */
  direction?: 'left' | 'right';
  /** Figma: Size. */
  size?: ArrowSwitchSize;
  /** Active (brand orange) state. */
  active?: boolean;
  'aria-label': string;
}

/**
 * Kinetic arrow switch (brand orange on active/hover).
 * Figma component set: Selections/Arrow switches (node 13280-181599).
 */
export const ArrowSwitch = React.forwardRef<HTMLButtonElement, ArrowSwitchProps>(
  function ArrowSwitch({ direction = 'right', size = 'medium', active = false, disabled, className = '', ...rest }, ref) {
    const d = direction === 'left' ? 'M11 4l-5 5 5 5' : 'M7 4l5 5-5 5';
    return (
      <button
        ref={ref}
        type="button"
        className={['k-arrow-switch', `k-arrow-switch--${size}`, className].filter(Boolean).join(' ')}
        data-active={active || undefined}
        disabled={disabled}
        {...rest}
      >
        <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  },
);

export default ArrowSwitch;
