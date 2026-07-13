import React from 'react';
import './tables.css';

export type SortDir = 'asc' | 'desc' | null;

export interface GridColumnProps {
  label: string;
  sortable?: boolean;
  sortDir?: SortDir;
  filter?: boolean;
  pinned?: boolean;
  hover?: boolean;
  onSort?: () => void;
}

const SortIcon: React.FC<{ dir: SortDir }> = ({ dir }) => (
  <svg className="k-th__sort" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M6 2l3 3H3l3-3z" fill={dir === 'asc' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1" />
    <path d="M6 10L3 7h6l-3 3z" fill={dir === 'desc' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1" />
  </svg>
);

/** Column header cell. Sortable + filterable + pinnable. */
export const GridColumn: React.FC<GridColumnProps> = ({
  label,
  sortable,
  sortDir = null,
  filter,
  pinned,
  hover,
  onSort,
}) => {
  const cls = [
    'k-th',
    sortable && 'k-th--sortable',
    sortDir && 'k-th--sorted',
    pinned && 'k-th--pinned',
    hover && 'k-th--hover',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <th className={cls} onClick={sortable ? onSort : undefined} aria-sort={sortDir === 'asc' ? 'ascending' : sortDir === 'desc' ? 'descending' : undefined}>
      <span className="k-th__inner">
        {label}
        {sortable && <SortIcon dir={sortDir} />}
        {filter && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M1 2h10l-4 4v4l-2 1V6L1 2z" fill="currentColor" opacity=".7" />
          </svg>
        )}
      </span>
    </th>
  );
};

export default GridColumn;
