import React from 'react';
import './checkboxes.css';

export interface RecoListWindowProps {
  /** RecoListItem rows. */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic recommendation-engine list window (container for RecoListItem rows).
 * Figma component: Checkboxes/Reco Engine List Window (node 13280-181600).
 */
export const RecoListWindow: React.FC<RecoListWindowProps> = ({ children, className = '' }) => (
  <div className={['k-reco-window', className].filter(Boolean).join(' ')} role="list">
    {children}
  </div>
);

export default RecoListWindow;
