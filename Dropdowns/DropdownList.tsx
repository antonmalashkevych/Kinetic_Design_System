import React from 'react';
import './dropdowns.css';

export interface DropdownListProps {
  multiselect?: boolean;
  complexRow?: boolean;
  children?: React.ReactNode;
}

/** Floating container that wraps dropdown list items. */
export const DropdownList: React.FC<DropdownListProps> = ({ children }) => (
  <div className="k-dd-list" role="listbox">
    {children}
  </div>
);

export default DropdownList;
