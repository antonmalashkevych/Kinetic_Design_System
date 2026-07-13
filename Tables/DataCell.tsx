import React from 'react';
import './tables.css';

export type CellType = 'text' | 'icon' | 'priority' | 'action' | 'checkbox';
export type RowState = 'default' | 'selected' | 'hover';
export type Density = 'low' | 'medium' | 'high';

export interface DataRowProps {
  state?: RowState;
  even?: boolean;
  density?: Density;
  children?: React.ReactNode;
  onClick?: () => void;
}

/** A grid data row. Selected/hover styling uses indigo. */
export const DataRow: React.FC<DataRowProps> = ({
  state = 'default',
  even,
  density = 'medium',
  children,
  onClick,
}) => {
  const cls = [
    'k-tr',
    `k-tr--${density}`,
    even ? 'k-tr--even' : 'k-tr--odd',
    state !== 'default' && `k-tr--${state}`,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <tr className={cls} aria-selected={state === 'selected'} onClick={onClick}>
      {children}
    </tr>
  );
};

export interface DataCellProps {
  type?: CellType;
  value?: React.ReactNode;
  numeric?: boolean;
  pinned?: boolean;
  checked?: boolean;
  priorityLabel?: string;
  onAction?: () => void;
  onCheck?: () => void;
}

/** Single grid cell rendered by content type. */
export const DataCell: React.FC<DataCellProps> = ({
  type = 'text',
  value,
  numeric,
  pinned,
  checked,
  priorityLabel = 'P1',
  onAction,
  onCheck,
}) => {
  const cls = ['k-td', numeric && 'k-td--num', pinned && 'k-td--pinned'].filter(Boolean).join(' ');

  let content: React.ReactNode = value;
  if (type === 'priority') {
    content = (
      <span className="k-priority">
        <span className="k-priority__dot" />
        {priorityLabel}
      </span>
    );
  } else if (type === 'checkbox') {
    content = (
      <input
        type="checkbox"
        checked={!!checked}
        onChange={onCheck}
        aria-label="Select row"
        style={{ accentColor: 'var(--kinetic-accent-interactive)' }}
      />
    );
  } else if (type === 'action') {
    content = (
      <button type="button" className="k-td-action" aria-label="Row action" onClick={onAction}>
        {value ?? '⋯'}
      </button>
    );
  } else if (type === 'icon') {
    content = <span className="k-td-icon">{value}</span>;
  }

  return <td className={cls}>{content}</td>;
};

export default DataCell;
