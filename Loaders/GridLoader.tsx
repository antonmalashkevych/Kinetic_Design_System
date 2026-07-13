import React from 'react';
import { Skeleton } from './Skeleton';
import './loaders.css';

export interface GridLoaderProps {
  /** Number of skeleton rows. */
  rows?: number;
  /** Number of columns per row. */
  columns?: number;
  /** Render a heavier header row first. */
  header?: boolean;
  className?: string;
}

/**
 * Kinetic grid / segments skeleton loader.
 * Figma component sets: Loaders/Molecules/Grid loaders + Segments loaders (node 4283-18667).
 */
export const GridLoader: React.FC<GridLoaderProps> = ({ rows = 3, columns = 4, header = true, className = '' }) => (
  <div className={['k-grid-loader', className].filter(Boolean).join(' ')} role="status" aria-label="Loading">
    {header ? (
      <div className="k-grid-loader__row k-grid-loader__row--header">
        {Array.from({ length: columns }).map((_, c) => (
          <Skeleton key={`h${c}`} />
        ))}
      </div>
    ) : null}
    {Array.from({ length: rows }).map((_, r) => (
      <div className="k-grid-loader__row" key={r}>
        {Array.from({ length: columns }).map((_, c) => (
          <Skeleton key={`${r}-${c}`} />
        ))}
      </div>
    ))}
  </div>
);

export default GridLoader;
