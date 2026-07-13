import React from 'react';

export type ModalStatus = 'success' | 'error' | 'info' | 'warning';

export interface StatusModalAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

export interface StatusModalProps {
  status: ModalStatus;
  title: string;
  message?: string;
  actions?: StatusModalAction[];
  onClose?: () => void;
}

const CFG: Record<ModalStatus, { color: string; glyph: React.ReactNode }> = {
  success: {
    color: 'var(--kinetic-semantic-success)',
    glyph: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M5.5 11.5l3.5 3.5 7.5-8" stroke="var(--kinetic-neutral-white)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  error: {
    color: 'var(--kinetic-semantic-error)',
    glyph: <span style={{ color: 'var(--kinetic-neutral-white)', fontWeight: 600, fontSize: 22, lineHeight: 1 }}>!</span>,
  },
  warning: {
    color: 'var(--kinetic-status-warning)',
    glyph: <span style={{ color: 'var(--kinetic-neutral-white)', fontWeight: 600, fontSize: 22, lineHeight: 1 }}>!</span>,
  },
  info: {
    color: 'var(--kinetic-semantic-info)',
    glyph: <span style={{ color: 'var(--kinetic-neutral-white)', fontWeight: 600, fontSize: 20, lineHeight: 1 }}>i</span>,
  },
};

/**
 * Modern status modal (Option C): a contained 40px status badge top-left beside
 * a left-aligned title + message, close affordance top-right, and actions bottom-right.
 * Success = green, error = red; the primary action (e.g. Try Again) is the brand-orange CTA.
 */
export const StatusModal: React.FC<StatusModalProps> = ({
  status,
  title,
  message,
  actions = [{ label: 'Close', variant: 'secondary' }],
  onClose,
}) => {
  const cfg = CFG[status];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        width: 378,
        background: 'var(--kinetic-bg-card)',
        border: '1px solid var(--kinetic-border-subtle, rgba(148,163,184,.16))',
        borderRadius: 12,
        padding: 16,
        fontFamily: 'var(--kinetic-font-family-sans)',
        boxShadow: 'var(--kinetic-shadow-xl, 0 16px 48px rgba(0,0,0,.5))',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: cfg.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {cfg.glyph}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 300, color: 'var(--kinetic-text-primary)' }}>{title}</div>
          {message && (
            <div style={{ fontSize: 13, color: 'var(--kinetic-text-secondary)', marginTop: 4 }}>{message}</div>
          )}
        </div>
        {onClose && (
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{
              flexShrink: 0,
              width: 24,
              height: 24,
              borderRadius: 6,
              background: 'var(--kinetic-bg-surface-subtle)',
              border: 'none',
              color: 'var(--kinetic-text-tertiary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ×
          </button>
        )}
      </div>
      {actions.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          {actions.map((a, i) => {
            const variant = a.variant ?? (i === actions.length - 1 && actions.length > 1 ? 'primary' : 'secondary');
            const style: React.CSSProperties = {
              fontFamily: 'var(--kinetic-font-family-sans)',
              fontSize: 13,
              fontWeight: 600,
              padding: '7px 14px',
              borderRadius: 'var(--kinetic-radius-input, 6px)',
              cursor: 'pointer',
              border: '1px solid transparent',
            };
            if (variant === 'primary') {
              style.background = 'var(--kinetic-gradient-action-primary, var(--kinetic-brand-primary))';
              style.color = 'var(--kinetic-neutral-white)';
            } else {
              style.background = 'var(--kinetic-bg-surface-subtle)';
              style.color = 'var(--kinetic-text-primary)';
              style.border = '1px solid color-mix(in srgb, var(--kinetic-border-default) 40%, transparent)';
            }
            return (
              <button key={i} type="button" style={style} onClick={a.onClick}>
                {a.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StatusModal;
