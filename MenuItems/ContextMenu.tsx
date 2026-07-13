import React from 'react';
import './menuitems.css';

export interface ContextMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  /** Destructive action (semantic/error text). */
  danger?: boolean;
  children?: React.ReactNode;
}

export const ContextMenuItem = React.forwardRef<HTMLButtonElement, ContextMenuItemProps>(
  function ContextMenuItem({ icon, danger = false, children, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        className={['k-context-menu-item', className].filter(Boolean).join(' ')}
        data-danger={danger || undefined}
        {...rest}
      >
        {icon ? <span className="k-left-menu-item__icon">{icon}</span> : null}
        {children}
      </button>
    );
  },
);

export interface ContextMenuProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic context menu (floating surface container of menu items).
 * Figma component: Menu items/Context menu (node 13282-181810).
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({ children, className = '' }) => (
  <div className={['k-context-menu', className].filter(Boolean).join(' ')} role="menu">
    {children}
  </div>
);

export default ContextMenu;
