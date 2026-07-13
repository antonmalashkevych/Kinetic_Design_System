import React from 'react';
import './tables.css';

export type FilterState = 'inactive' | 'hover' | 'focus' | 'activated' | 'validation';
export type FieldType = 'text-input' | 'dropdown' | 'date-field';

export interface TableFilterProps {
  fieldType?: FieldType;
  state?: FilterState;
  placeholder?: string;
  value?: string;
}

/** Table filter-bar field. Focus/activated border = indigo; validation = danger. */
export const TableFilter: React.FC<TableFilterProps> = ({
  fieldType = 'text-input',
  state = 'inactive',
  placeholder = 'Filter',
  value,
}) => {
  const cls = ['k-tfilter', state !== 'inactive' && `k-tfilter--${state}`].filter(Boolean).join(' ');
  return (
    <div className={cls} role="group" data-field={fieldType}>
      <span style={{ flex: 1, color: value ? 'inherit' : 'var(--kinetic-text-tertiary)' }}>
        {value ?? placeholder}
      </span>
      {fieldType === 'dropdown' && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M3.5 5.5L7 9l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {fieldType === 'date-field' && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <rect x="2" y="3" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M2 5.5h10M4.5 2v2M9.5 2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
};

export default TableFilter;
