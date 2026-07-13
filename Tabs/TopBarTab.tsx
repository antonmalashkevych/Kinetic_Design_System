import React from 'react';
import './tabs.css';

export interface TopBarTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Active. */
  active?: boolean;
  children?: React.ReactNode;
}

/**
 * Kinetic top-bar tab.
 * Figma component set: Tabs/Top bar (node 661-7732).
 */
export const TopBarTab = React.forwardRef<HTMLButtonElement, TopBarTabProps>(
  function TopBarTab({ active = false, children, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={active}
        className={['k-top-bar-tab', className].filter(Boolean).join(' ')}
        data-active={active || undefined}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default TopBarTab;
