import React from 'react';
import { Checkbox } from './Checkbox';
import './checkboxes.css';

export interface SelectionCheckboxProps {
  /** Figma: State=Selected. */
  selected?: boolean;
  disabled?: boolean;
  /** Figma: List — row inside a list (adds divider, square corners). */
  list?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic selectable row with a leading checkbox.
 * Figma component set: Checkboxes/Checkbox with selection (node 13280-181600).
 */
export const SelectionCheckbox: React.FC<SelectionCheckboxProps> = ({
  selected = false,
  disabled = false,
  list = false,
  children,
  className = '',
}) => (
  <label
    className={['k-selection', className].filter(Boolean).join(' ')}
    data-selected={selected || undefined}
    data-list={list || undefined}
    data-disabled={disabled || undefined}
  >
    <Checkbox state={selected ? 'checked' : 'unchecked'} showLabel={false} disabled={disabled} />
    <span>{children}</span>
  </label>
);

export default SelectionCheckbox;
