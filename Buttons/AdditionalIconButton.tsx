import React from 'react';
import './buttons.css';

/** Figma: Buttons/Icon button/Additional — Fill */
export type AdditionalIconButtonFill = 'solid' | 'gradient';

export interface AdditionalIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Fill (Solid / Gradient) */
  fill?: AdditionalIconButtonFill;
  /** The icon node */
  icon: React.ReactNode;
  /** Accessible label (icon-only button) */
  'aria-label': string;
}

/**
 * Kinetic "additional" icon button (solid interactive wash or brand gradient).
 * Figma component set: Buttons/Icon button/Additional (node 16607-688).
 */
export const AdditionalIconButton = React.forwardRef<
  HTMLButtonElement,
  AdditionalIconButtonProps
>(function AdditionalIconButton(
  { fill = 'solid', icon, disabled, className = '', ...rest },
  ref,
) {
  const cls = ['k-add-btn', `k-add-btn--${fill}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <button
      ref={ref}
      type="button"
      className={cls}
      disabled={disabled}
      {...rest}
    >
      <span className="k-add-btn__icon">{icon}</span>
    </button>
  );
});

export default AdditionalIconButton;
