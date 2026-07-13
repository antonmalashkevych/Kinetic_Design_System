import React from 'react';
import './headers.css';

/** Which Figma header layout this represents. */
export type HeaderVariant =
  | 'user-manager'
  | 'modal'
  | 'item-history'
  | 'panels'
  | 'conversations'
  | 'chat';

/** Visual style: plain solid surface, or decorative gradient. */
export type HeaderStyle = 'plain' | 'gradient';

export interface HeaderProps {
  /** Figma header type. */
  variant?: HeaderVariant;
  /** plain (bg surface) or gradient. */
  headerStyle?: HeaderStyle;
  /** Use the card surface instead of page bg (plain only). */
  onCard?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Leading node (back button, icon, avatar). */
  leading?: React.ReactNode;
  /** Right-aligned actions. */
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic page/panel header.
 * Figma component sets: Headers/User Manager, Modal, Item history, Panels,
 * Conversations panel, Chat (node 1-12).
 */
export const Header: React.FC<HeaderProps> = ({
  variant = 'user-manager',
  headerStyle = 'plain',
  onCard = false,
  title,
  subtitle,
  leading,
  actions,
  className = '',
}) => {
  const styleClass =
    headerStyle === 'gradient' ? 'k-header--gradient' : onCard ? 'k-header--plain-card' : 'k-header--plain';
  return (
    <header className={['k-header', styleClass, className].filter(Boolean).join(' ')} data-variant={variant}>
      <div className="k-header__lead">
        {leading != null ? <span className="k-header__icon">{leading}</span> : null}
        <div className="k-header__titles">
          {title != null ? <span className="k-header__title">{title}</span> : null}
          {subtitle != null ? <span className="k-header__subtitle">{subtitle}</span> : null}
        </div>
      </div>
      {actions != null ? <div className="k-header__actions">{actions}</div> : null}
    </header>
  );
};

export default Header;
