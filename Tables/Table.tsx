import React from 'react';
import './tables.css';

export interface TableProps {
  children?: React.ReactNode;
}

/** Table container. Compose with GridColumn (header) and DataRow/DataCell. */
export const Table: React.FC<TableProps> = ({ children }) => (
  <table className="k-table">{children}</table>
);

export default Table;
