import React from 'react';
import './cards.css';

export interface CardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** top-right slot: a chip, badge, count, or chevron */
  action?: React.ReactNode;
  /** meta row below the header (e.g. icon + "32 permissions") */
  meta?: React.ReactNode;
  /** chip row (e.g. permission tags) */
  chips?: React.ReactNode;
  hover?: boolean;
  hoverable?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Generic content card: title + subtitle, optional top-right action,
 * meta row, chip row, and arbitrary body content.
 */
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  action,
  meta,
  chips,
  hover,
  hoverable,
  children,
  onClick,
}) => {
  const cls = ['k-card', hoverable && 'k-card--hoverable', hover && 'k-card--hover'].filter(Boolean).join(' ');
  return (
    <div className={cls} onClick={onClick}>
      <div className="k-card__row">
        <div className="k-card__main">
          {title && <span className="k-card__title">{title}</span>}
          {subtitle && <span className="k-card__subtitle">{subtitle}</span>}
        </div>
        {action && <span className="k-card__action">{action}</span>}
      </div>
      {meta && <span className="k-card__meta">{meta}</span>}
      {chips && <div className="k-card__chips">{chips}</div>}
      {children}
    </div>
  );
};

export default Card;
