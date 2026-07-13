import React from 'react';
import type { FieldState } from './types';
import './inputs.css';

export interface GroupedInputProps {
  /** Figma: State (applies to the joined group) */
  state?: FieldState;
  /** Field components to join together (e.g. TextInput, DateField). */
  children: React.ReactNode;
  className?: string;
}

/**
 * Kinetic grouped input — joins multiple field controls into one segmented row.
 * Figma component set: Inputs/Grouped Input (node 16610-3058).
 */
export const GroupedInput: React.FC<GroupedInputProps> = ({ state = 'regular', children, className = '' }) => (
  <div className={['k-grouped', className].filter(Boolean).join(' ')} data-state={state}>
    {children}
  </div>
);

export default GroupedInput;
