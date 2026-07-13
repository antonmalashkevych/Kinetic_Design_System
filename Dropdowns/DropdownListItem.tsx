import React from 'react';
import './dropdowns.css';

export type DropdownItemState = 'regular' | 'hover' | 'selected' | 'focus' | 'disabled';

export interface DropdownListItemProps {
  label: string;
  sub?: string;
  state?: DropdownItemState;
  highlight?: boolean;
  icon?: React.ReactNode;
  checkbox?: React.ReactNode;
  divider?: boolean;
  arrow?: React.ReactNode;
  onSelect?: () => void;
}

/** Single row within a dropdown list. Selection/hover/focus use indigo (accent/interactive). */
export const DropdownListItem: React.FC<DropdownListItemProps> = ({
  label,
  sub,
  state = 'regular',
  highlight,
  icon,
  checkbox,
  divider,
  arrow,
  onSelect,
}) => {
  const cls = [
    'k-dd-item',
    state !== 'regular' && `k-dd-item--${state}`,
    divider && 'k-dd-item__divider',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cls}
      role="option"
      aria-selected={state === 'selected'}
      aria-disabled={state === 'disabled'}
      onClick={state === 'disabled' ? undefined : onSelect}
    >
      {checkbox}
      {icon && <span className="k-dd-item__icon">{icon}</span>}
      <span className="k-dd-item__label" style={highlight ? { fontWeight: 600 } : undefined}>
        {label}
      </span>
      {sub && <span className="k-dd-item__sub">{sub}</span>}
      {arrow}
    </div>
  );
};

export default DropdownListItem;
