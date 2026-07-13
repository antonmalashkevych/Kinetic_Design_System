import React from 'react';
import './notifications.css';

export type NotificationType = 'info' | 'success' | 'warning' | 'danger';

export interface NotificationAction {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export interface NotificationProps {
  type?: NotificationType;
  title?: string;
  message: string;
  multiline?: boolean;
  actions?: NotificationAction[];
  onClose?: () => void;
}

const icons: Record<NotificationType, React.ReactNode> = {
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v4M10 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2.5l8 14H2l8-14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 8v3M10 13.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  danger: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4.5M10 13.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

/**
 * Toast / inline notification. Status accent uses semantic tokens
 * (info/success/warning/danger); the primary action button is the brand-orange CTA.
 */
export const Notification: React.FC<NotificationProps> = ({
  type = 'info',
  title,
  message,
  multiline = true,
  actions = [],
  onClose,
}) => {
  const cls = [
    'k-notification',
    `k-notification--${type}`,
    multiline ? 'k-notification--multi' : 'k-notification--single',
  ].join(' ');

  return (
    <div className={cls} role="status">
      <span className="k-notification__icon">{icons[type]}</span>
      <div className="k-notification__body">
        {title && <span className="k-notification__title">{title}</span>}
        <span className="k-notification__message">{message}</span>
        {actions.length > 0 && (
          <div className="k-notification__actions">
            {actions.map((a, i) => (
              <button
                key={i}
                type="button"
                className={`k-notification__btn k-notification__btn--${a.variant ?? (i === 0 ? 'primary' : 'secondary')}`}
                onClick={a.onClick}
              >
                {a.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {onClose && (
        <button type="button" className="k-notification__close" aria-label="Dismiss" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

export default Notification;
