import React from 'react';
import './buttons.css';

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=Active (persistent active/selected look) */
  active?: boolean;
  /** Optional leading icon */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Kinetic text (link-style) button.
 * Figma component set: Buttons/Text button (node 16606-546).
 */
export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  function TextButton(
    { active = false, icon, disabled, children, className = '', ...rest },
    ref,
  ) {
    const cls = ['k-text-btn', className].filter(Boolean).join(' ');
    return (
      <button
        ref={ref}
        type="button"
        className={cls}
        data-active={active || undefined}
        disabled={disabled}
        {...rest}
      >
        {icon ? <span className="k-btn__icon">{icon}</span> : null}
        {children}
      </button>
    );
  },
);

export default TextButton;
