import React from 'react';
import './navbars.css';

export interface SideBarProps {
  /** Figma: Collapse — collapsed (rail) vs expanded. */
  collapsed?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic collapsible sidebar.
 * Figma component set: Navigation bars/Side bar (node 1-15).
 */
export const SideBar: React.FC<SideBarProps> = ({ collapsed = false, children, className = '' }) => (
  <aside
    className={['k-sidebar', collapsed ? 'k-sidebar--collapsed' : '', className].filter(Boolean).join(' ')}
    data-collapsed={collapsed || undefined}
  >
    {children}
  </aside>
);

export default SideBar;
