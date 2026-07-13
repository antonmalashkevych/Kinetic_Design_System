import React from 'react';
import './dropdowns.css';

export type DropdownState = 'regular' | 'hover' | 'focus' | 'selected' | 'inactive' | 'disabled';

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  value?: string;
  state?: DropdownState;
  open?: boolean;
  children?: React.ReactNode; // list content
  onToggle?: () => void;
}

const Caret: React.FC = () => (
  <svg className="k-dd__caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Single-select dropdown trigger. Focus/selected border = indigo. */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder = 'Select',
  value,
  state = 'regular',
  open,
  children,
  onToggle,
}) => {
  const controlCls = [
    'k-dd__control',
    state !== 'regular' && `k-dd__control--${state}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="k-dd">
      {label && <span className="k-dd__label">{label}</span>}
      <div
        className={controlCls}
        role="combobox"
        aria-expanded={!!open}
        aria-disabled={state === 'disabled'}
        onClick={state === 'disabled' ? undefined : onToggle}
      >
        {value ? (
          <span className="k-dd__value">{value}</span>
        ) : (
          <span className="k-dd__placeholder">{placeholder}</span>
        )}
        <Caret />
      </div>
      {open && children}
    </div>
  );
};

export default Dropdown;
