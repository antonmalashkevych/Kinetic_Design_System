import React from 'react';
import './badges.css';

/** Figma: Badges/Status — Status */
export type BadgeStatus = 'active' | 'inactive' | 'pending';

export interface StatusBadgeProps {
  /** Figma: Status (Active / Inactive / Pending) */
  status?: BadgeStatus;
  /** Label (defaults to the uppercased status) */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic status badge (solid pill, white label).
 * Figma component set: Badges/Status (node 1711-9092).
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status = 'active', children, className = '' }) => (
  <span className={['k-status', `k-status--${status}`, className].filter(Boolean).join(' ')}>
    {children ?? status}
  </span>
);

export default StatusBadge;
