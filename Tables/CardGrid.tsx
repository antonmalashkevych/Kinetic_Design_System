import React from 'react';
import './tables.css';

export interface CardRowProps {
  even?: boolean;
  children?: React.ReactNode;
}

export const CardRow: React.FC<CardRowProps> = ({ even, children }) => (
  <div className={`k-card-row ${even ? 'k-card-row--even' : 'k-card-row--odd'}`}>{children}</div>
);

export interface CardGridProps {
  showContent?: boolean;
  children?: React.ReactNode;
}

/** Compact card-style grid (mobile / dense list view). */
export const CardGrid: React.FC<CardGridProps> = ({ children }) => (
  <div className="k-card-grid" role="table">
    {children}
  </div>
);

export default CardGrid;
