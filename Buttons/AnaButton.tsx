import React from 'react';
import './buttons.css';

/**
 * Kinetic Ana button.
 * Figma component set: [Review] Ana/Buttons (node 16606-453).
 * NOTE: this set is marked "[Review]" in Figma (legacy). Included for completeness;
 * prefer `Button` for new work.
 */
export interface AnaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=Active */
  active?: boolean;
  /** Label (Figma: Text, default "Analyze") */
  children?: React.ReactNode;
}

export const AnaButton = React.forwardRef<HTMLButtonElement, AnaButtonProps>(
  function AnaButton(
    { active = false, disabled, children = 'Analyze', className = '', ...rest },
    ref,
  ) {
    const cls = ['k-ana-btn', className].filter(Boolean).join(' ');
    return (
      <button
        ref={ref}
        type="button"
        className={cls}
        data-active={active || undefined}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default AnaButton;
