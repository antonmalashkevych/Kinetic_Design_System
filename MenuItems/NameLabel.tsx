import React from 'react';
import './menuitems.css';

export interface NameLabelProps {
  name?: React.ReactNode;
  /** Figma: "Logged in as" meta line. */
  meta?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic name label (user name + optional "logged in as" meta).
 * Figma component set: Menu items/Name (node 13282-181810).
 */
export const NameLabel: React.FC<NameLabelProps> = ({ name, meta, className = '' }) => (
  <span className={['k-name-label', className].filter(Boolean).join(' ')}>
    {name != null ? <span className="k-name-label__name">{name}</span> : null}
    {meta != null ? <span className="k-name-label__meta">{meta}</span> : null}
  </span>
);

export default NameLabel;
