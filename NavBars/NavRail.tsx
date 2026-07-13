import React from 'react';
import './navbars.css';

export interface NavRailProps {
  /** Which side rail (Left menu / Right menu). */
  side?: 'left' | 'right';
  /** Figma: Ana — enable the Ana entry (Right menu). */
  ana?: boolean;
  /** Rail items (icon buttons). */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic vertical navigation rail.
 * Figma component sets: Navigation bars/Left menu + Right menu (node 1-15).
 */
export const NavRail: React.FC<NavRailProps> = ({ side = 'left', ana = false, children, className = '' }) => (
  <nav
    className={['k-nav-rail', className].filter(Boolean).join(' ')}
    data-side={side}
    data-ana={ana || undefined}
    aria-label={side === 'left' ? 'Primary navigation' : 'Secondary navigation'}
  >
    {children}
  </nav>
);

export default NavRail;
