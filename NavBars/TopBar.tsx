import React from 'react';
import './navbars.css';

export interface TopBarProps {
  /** Leading content (logo / product switcher). */
  leading?: React.ReactNode;
  /** Center content (tabs / nav). */
  children?: React.ReactNode;
  /** Right-aligned actions. */
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic top navigation bar.
 * Figma component set: Navigation bars/Top bar (node 1-15).
 */
export const TopBar: React.FC<TopBarProps> = ({ leading, children, actions, className = '' }) => (
  <header className={['k-topbar', className].filter(Boolean).join(' ')}>
    {leading != null ? <div className="k-topbar__lead">{leading}</div> : null}
    <div className="k-topbar__center">{children}</div>
    {actions != null ? <div className="k-topbar__actions">{actions}</div> : null}
  </header>
);

export default TopBar;
