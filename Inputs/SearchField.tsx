import React from 'react';
import FieldBase from './FieldBase';
import type { FieldState } from './types';
import './inputs.css';

export interface SearchFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Figma: State (includes Loading) */
  state?: FieldState;
  /** Figma: Auto-complete — autocomplete result items */
  items?: string[];
  /** index of the highlighted/selected item */
  selectedIndex?: number;
  /** Figma: No results */
  noResults?: boolean;
}

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/**
 * Kinetic search field with optional autocomplete list.
 * Figma component set: Inputs/Search field (node 16610-5645).
 */
export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField(
    { label, helperText, state = 'regular', items, selectedIndex, noResults, className, disabled, id, placeholder = 'Search…', ...rest },
    ref,
  ) {
    const showList = noResults || (Array.isArray(items) && items.length > 0);
    return (
      <FieldBase label={label} helperText={helperText} state={state} htmlFor={id} className={className}>
        <div className="k-field__control">
          <span className="k-field__icon">
            <SearchIcon />
          </span>
          <input
            ref={ref}
            id={id}
            type="search"
            className="k-field__input"
            placeholder={placeholder}
            disabled={disabled || state === 'disabled'}
            aria-busy={state === 'loading' || undefined}
            {...rest}
          />
        </div>
        {showList ? (
          <div className="k-field__list" role="listbox">
            {noResults ? (
              <div className="k-field__list-empty">No results</div>
            ) : (
              items!.map((item, i) => (
                <div
                  key={item + i}
                  role="option"
                  aria-selected={i === selectedIndex}
                  className="k-field__list-item"
                >
                  {item}
                </div>
              ))
            )}
          </div>
        ) : null}
      </FieldBase>
    );
  },
);

export default SearchField;
