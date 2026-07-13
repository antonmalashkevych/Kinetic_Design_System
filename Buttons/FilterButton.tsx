import React from 'react';
import './buttons.css';

export interface FilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=Active */
  active?: boolean;
  /** Figma: State=Selected filters */
  selected?: boolean;
  /** Figma: tag boolean — show the count tag */
  showTag?: boolean;
  /** Count rendered inside the tag */
  count?: number;
  /** Optional leading icon */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Kinetic advanced user filter button.
 * Figma component set: AdvancedUserFilters (node 16606-460).
 */
export const FilterButton = React.forwardRef<
  HTMLButtonElement,
  FilterButtonProps
>(function FilterButton(
  {
    active = false,
    selected = false,
    showTag = false,
    count,
    icon,
    disabled,
    children,
    className = '',
    ...rest
  },
  ref,
) {
  const cls = ['k-filter-btn', className].filter(Boolean).join(' ');
  return (
    <button
      ref={ref}
      type="button"
      className={cls}
      data-active={active || undefined}
      data-selected={selected || undefined}
      disabled={disabled}
      {...rest}
    >
      {icon ? <span className="k-btn__icon">{icon}</span> : null}
      {children}
      {showTag && count != null ? (
        <span className="k-filter-btn__tag">{count}</span>
      ) : null}
    </button>
  );
});

export default FilterButton;
