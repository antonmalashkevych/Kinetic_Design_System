import React from 'react';
import './cards.css';

export type UserStatus = 'active' | 'pending' | 'inactive';

export interface UserCardProps {
  name: string;
  email?: string;
  avatar?: React.ReactNode;
  initials?: string;
  status?: UserStatus;
  hover?: boolean;
  onClick?: () => void;
}

const STATUS_LABEL: Record<UserStatus, string> = { active: 'Active', pending: 'Pending', inactive: 'Inactive' };

/** User row card: avatar + name + email + status badge. */
export const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  avatar,
  initials,
  status,
  hover,
  onClick,
}) => (
  <div className={`k-card k-user-card k-card--hoverable${hover ? ' k-card--hover' : ''}`} onClick={onClick}>
    <span className="k-user-card__avatar">{avatar ?? initials ?? name.charAt(0)}</span>
    <div className="k-user-card__body">
      <span className="k-user-card__name">{name}</span>
      {email && <span className="k-user-card__email">{email}</span>}
    </div>
    {status && <span className={`k-user-card__status k-user-card__status--${status}`}>{STATUS_LABEL[status]}</span>}
  </div>
);

export default UserCard;
