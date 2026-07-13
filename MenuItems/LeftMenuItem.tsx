import React from 'react';
import './menuitems.css';

/** Figma: Menu items/Left menu items — Type. */
export type LeftMenuItemType =
  | 'folder'
  | 'report'
  | 'segment'
  | 'text'
  | 'specialProject'
  | 'importButton'
  | 'members';

export interface LeftMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Type. */
  type?: LeftMenuItemType;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  /** Figma: State=Selected (brand orange text). */
  selected?: boolean;
  /** Figma: Count — trailing count badge. */
  count?: number;
}

/**
 * Kinetic left-navigation item.
 * Figma component set: Menu items/Left menu items (node 13282-181810).
 */
export const LeftMenuItem = React.forwardRef<HTMLButtonElement, LeftMenuItemProps>(
  function LeftMenuItem({ type = 'folder', label, icon, selected = false, count, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={['k-left-menu-item', className].filter(Boolean).join(' ')}
        data-type={type}
        data-selected={selected || undefined}
        aria-current={selected ? 'page' : undefined}
        {...rest}
      >
        {icon ? <span className="k-left-menu-item__icon">{icon}</span> : null}
        <span className="k-left-menu-item__label">{label}</span>
        {count != null ? <span className="k-left-menu-item__count">{count}</span> : null}
      </button>
    );
  },
);

export default LeftMenuItem;
