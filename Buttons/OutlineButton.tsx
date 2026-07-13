import React from 'react';
import './buttons.css';

/** Figma: Buttons/Outline — View */
export type OutlineButtonView = 'full' | 'icon';

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: View (Full = label [+icon] / Icon = icon-only) */
  view?: OutlineButtonView;
  /** Figma: State=Active (persistent selected look) */
  active?: boolean;
  /** Figma: icon boolean — show leading icon (Full view) */
  showIcon?: boolean;
  /** The icon node */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Kinetic outline button.
 * Figma component set: Buttons/Outline (node 16606-493).
 */
export const OutlineButton = React.forwardRef<
  HTMLButtonElement,
  OutlineButtonProps
>(function OutlineButton(
  {
    view = 'full',
    active = false,
    showIcon = true,
    icon,
    disabled,
    children,
    className = '',
    'aria-label': ariaLabel,
    ...rest
  },
  ref,
) {
  const cls = ['k-outline-btn', `k-outline-btn--${view}`, className]
    .filter(Boolean)
    .join(' ');
  const iconOnly = view === 'icon';
  return (
    <button
      ref={ref}
      type="button"
      className={cls}
      data-active={active || undefined}
      disabled={disabled}
      aria-label={iconOnly ? ariaLabel : ariaLabel}
      {...rest}
    >
      {(iconOnly || showIcon) && icon ? (
        <span className="k-outline-btn__icon">{icon}</span>
      ) : null}
      {!iconOnly && children != null ? <span>{children}</span> : null}
    </button>
  );
});

export default OutlineButton;
