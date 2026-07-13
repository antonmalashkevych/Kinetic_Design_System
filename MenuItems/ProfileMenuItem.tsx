import React from 'react';
import './menuitems.css';

export interface ProfileMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: React.ReactNode;
  /** Figma: User/Admin. */
  admin?: boolean;
  avatar?: React.ReactNode;
  /** Figma: State=Selected (brand orange). */
  selected?: boolean;
}

/**
 * Kinetic profile menu item.
 * Figma component set: Menu items/Profile (node 13282-181810).
 */
export const ProfileMenuItem = React.forwardRef<HTMLButtonElement, ProfileMenuItemProps>(
  function ProfileMenuItem({ name, admin = false, avatar, selected = false, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={['k-profile-item', className].filter(Boolean).join(' ')}
        data-selected={selected || undefined}
        {...rest}
      >
        {avatar}
        <span>
          {name != null ? <div className="k-profile-item__name">{name}</div> : null}
          <div className="k-profile-item__role">{admin ? 'Admin' : 'User'}</div>
        </span>
      </button>
    );
  },
);

export default ProfileMenuItem;
