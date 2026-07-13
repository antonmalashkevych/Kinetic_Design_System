import React from 'react';
import './tabs.css';

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=Active (brand underline). */
  active?: boolean;
  children?: React.ReactNode;
}

/**
 * Kinetic underline tab.
 * Figma component set: Tabs/Atoms/Tab (node 661-7732).
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(function Tab({ active = false, children, className = '', ...rest }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={active}
      className={['k-tab', className].filter(Boolean).join(' ')}
      data-active={active || undefined}
      {...rest}
    >
      {children}
    </button>
  );
});

export interface TabsProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic tab bar.
 * Figma component set: Tabs (node 661-7732).
 */
export const Tabs: React.FC<TabsProps> = ({ children, className = '' }) => (
  <div className={['k-tabs', className].filter(Boolean).join(' ')} role="tablist">
    {children}
  </div>
);

export default Tabs;
