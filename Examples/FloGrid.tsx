import React from 'react';
import { Table, GridColumn, DataRow, DataCell } from '../Tables';
import type { SortDir } from '../Tables';

export interface FloGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filter?: boolean;
  pinned?: boolean;
  numeric?: boolean;
  /** cell renderer for special types (priority chip, toggle, action) */
  type?: 'text' | 'priority' | 'toggle' | 'action' | 'checkbox';
}

export interface FloGridProps {
  title?: string;
  columns: FloGridColumn[];
  rows: Record<string, React.ReactNode>[];
  sort?: { key: string; dir: SortDir };
  selectedRow?: number;
  onSort?: (key: string) => void;
  onRowSelect?: (index: number) => void;
}

/**
 * Example: a full Flo data grid composed from the Kinetic Tables primitives.
 * Demonstrates sortable/filterable/pinned headers, zebra rows, indigo selection,
 * priority chips (orange), toggle cells (indigo), and mono numeric alignment.
 */
export const FloGrid: React.FC<FloGridProps> = ({
  title,
  columns,
  rows,
  sort,
  selectedRow,
  onSort,
  onRowSelect,
}) => (
  <div>
    {title && (
      <div style={{ fontFamily: 'var(--kinetic-font-family-sans)', fontSize: 16, fontWeight: 600, color: 'var(--kinetic-text-primary)', paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid color-mix(in srgb, var(--kinetic-border-default) 35%, transparent)' }}>
        {title}
      </div>
    )}
    <Table>
      <thead>
        <tr>
          {columns.map((c) => (
            <GridColumn
              key={c.key}
              label={c.label}
              sortable={c.sortable}
              filter={c.filter}
              pinned={c.pinned}
              sortDir={sort?.key === c.key ? sort.dir : null}
              onSort={() => onSort?.(c.key)}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <DataRow
            key={i}
            even={i % 2 === 0}
            density="medium"
            state={selectedRow === i ? 'selected' : 'default'}
            onClick={() => onRowSelect?.(i)}
          >
            {columns.map((c) => (
              <DataCell
                key={c.key}
                type={c.type ?? 'text'}
                numeric={c.numeric}
                pinned={c.pinned}
                value={row[c.key]}
              />
            ))}
          </DataRow>
        ))}
      </tbody>
    </Table>
  </div>
);

export default FloGrid;
