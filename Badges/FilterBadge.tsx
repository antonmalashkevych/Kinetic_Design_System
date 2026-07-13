import React from 'react';
import './badges.css';

export interface FilterBadgeProps {
  children?: React.ReactNode;
  /** Called when the remove (×) control is clicked */
  onRemove?: () => void;
  className?: string;
}

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Kinetic removable filter badge.
 * Figma component: Badges/Filter (node 1711-9092).
 */
export const FilterBadge: React.FC<FilterBadgeProps> = ({ children, onRemove, className = '' }) => (
  <span className={['k-filter-badge', className].filter(Boolean).join(' ')}>
    <span>{children}</span>
    {onRemove ? (
      <button type="button" className="k-filter-badge__remove" onClick={onRemove} aria-label="Remove filter">
        <CloseIcon />
      </button>
    ) : null}
  </span>
);

export default FilterBadge;
