import React from 'react';
import { Checkbox } from './Checkbox';
import './checkboxes.css';

export interface PermissionCheckboxProps {
  /** Figma: Text — permission title. */
  title?: React.ReactNode;
  /** Figma: Sub-text — supporting path/description. */
  subtext?: React.ReactNode;
  /** Figma: State=Selected. */
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Kinetic permission checkbox row (checkbox + title + sub-text).
 * Figma component set: Checkboxes/Permissions (node 13280-181600).
 */
export const PermissionCheckbox: React.FC<PermissionCheckboxProps> = ({
  title,
  subtext,
  selected = false,
  disabled = false,
  className = '',
}) => (
  <label className={['k-permission', className].filter(Boolean).join(' ')} data-selected={selected || undefined}>
    <Checkbox state={selected ? 'checked' : 'unchecked'} showLabel={false} disabled={disabled} />
    <span className="k-permission__body">
      {title != null ? <span className="k-permission__title">{title}</span> : null}
      {subtext != null ? <span className="k-permission__sub">{subtext}</span> : null}
    </span>
  </label>
);

export default PermissionCheckbox;
