import React from 'react';
import './menuitems.css';

export interface MenuBarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  /** Figma: State=Selected. */
  selected?: boolean;
  /** Figma: State=New message — show the notification dot. */
  badge?: boolean;
  /** Figma: Menu (Left / Right). */
  menu?: 'left' | 'right';
  'aria-label': string;
}

/**
 * Kinetic top-bar menu item (selected = brand orange).
 * Figma component set: Menu items/Bar item (node 13282-181810).
 */
export const MenuBarItem = React.forwardRef<HTMLButtonElement, MenuBarItemProps>(
  function MenuBarItem({ icon, selected = false, badge = false, menu = 'left', disabled, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={['k-menu-bar-item', className].filter(Boolean).join(' ')}
        data-selected={selected || undefined}
        data-menu={menu}
        disabled={disabled}
        {...rest}
      >
        {icon}
        {badge ? <span className="k-menu-bar-item__badge" /> : null}
      </button>
    );
  },
);

export default MenuBarItem;
