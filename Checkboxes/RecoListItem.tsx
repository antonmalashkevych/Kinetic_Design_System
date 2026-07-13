import React from 'react';
import { Checkbox } from './Checkbox';
import './checkboxes.css';

export interface RecoListItemProps {
  title?: React.ReactNode;
  checked?: boolean;
  /** Figma: Information Icon */
  informationIcon?: boolean;
  /** Figma: New */
  isNew?: boolean;
  /** Figma: Reprioritize */
  reprioritize?: boolean;
  /** Figma: Drag&Drop */
  dragDrop?: boolean;
  /** Figma: Context Menu */
  contextMenu?: boolean;
  className?: string;
}

const Ic = ({ d, info }: { d: string; info?: boolean }) => (
  <span className={['k-reco-item__icon', info ? 'k-reco-item__icon--info' : ''].filter(Boolean).join(' ')}>
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/**
 * Kinetic recommendation-engine list item.
 * Figma component set: Checkboxes/Reco Engine List Item (node 13280-181600).
 */
export const RecoListItem: React.FC<RecoListItemProps> = ({
  title,
  checked = false,
  informationIcon = false,
  isNew = false,
  reprioritize = false,
  dragDrop = false,
  contextMenu = false,
  className = '',
}) => (
  <div className={['k-reco-item', className].filter(Boolean).join(' ')}>
    {dragDrop ? <Ic d="M6 4h.01M6 8h.01M6 12h.01M10 4h.01M10 8h.01M10 12h.01" /> : null}
    <Checkbox state={checked ? 'checked' : 'unchecked'} showLabel={false} />
    <span className="k-reco-item__title">{title}</span>
    {isNew ? <span className="k-reco-item__new">NEW</span> : null}
    {informationIcon ? <Ic d="M8 7.2v3.6M8 5h.01" info /> : null}
    {reprioritize ? <Ic d="M3 5h10M3 8h7M3 11h4" /> : null}
    {contextMenu ? <Ic d="M8 4h.01M8 8h.01M8 12h.01" /> : null}
  </div>
);

export default RecoListItem;
