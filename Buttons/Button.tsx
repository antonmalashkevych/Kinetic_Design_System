import React from 'react';
import './buttons.css';

/** Figma: Buttons/General — Type */
export type ButtonVariant = 'primary' | 'secondary' | 'secondary2';
/** Figma: Buttons/General — Size */
export type ButtonSize = 'normal' | 'small' | 'wider';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Figma: Type (Primary / Secondary / Secondary 2) */
  variant?: ButtonVariant;
  /** Figma: Size (Normal / Small / Wider) */
  size?: ButtonSize;
  /** Figma: Show Icon — render the leading icon */
  showIcon?: boolean;
  /** Leading icon node (Figma: Icon instance-swap) */
  icon?: React.ReactNode;
  /** Figma: Show Chevron — render trailing dropdown chevron */
  showChevron?: boolean;
  /** Figma: State=Activated (pressed / selected appearance) */
  active?: boolean;
  /** Button label (Figma: Text) */
  children?: React.ReactNode;
  /** Native button type */
  htmlType?: 'button' | 'submit' | 'reset';
}

const ChevronDown = () => (
  <svg
    className="k-btn__chevron"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Kinetic General button.
 * Figma component set: Buttons/General (node 16606-563).
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'normal',
      showIcon = false,
      icon,
      showChevron = false,
      active = false,
      disabled,
      children,
      htmlType = 'button',
      className = '',
      ...rest
    },
    ref,
  ) {
    const cls = [
      'k-btn',
      `k-btn--${variant}`,
      `k-btn--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={htmlType}
        className={cls}
        disabled={disabled}
        data-active={active || undefined}
        {...rest}
      >
        {showIcon && icon ? <span className="k-btn__icon">{icon}</span> : null}
        {children != null ? <span className="k-btn__label">{children}</span> : null}
        {showChevron ? <ChevronDown /> : null}
      </button>
    );
  },
);

export default Button;
