import React from 'react';
import { ContextMenu } from './ContextMenu';
import './menuitems.css';

export interface ProfileMenuProps {
  /** Figma: Property 1 (User / Admin). */
  variant?: 'user' | 'admin';
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic profile dropdown menu.
 * Figma component set: Menu items/Profile menu (node 13282-181810).
 */
export const ProfileMenu: React.FC<ProfileMenuProps> = ({ variant = 'user', children, className = '' }) => (
  <ContextMenu className={className} data-variant={variant}>
    {children}
  </ContextMenu>
);

export default ProfileMenu;
