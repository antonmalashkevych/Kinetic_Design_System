import React from 'react';
import './modals.css';

export interface ModalAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

export interface ModalProps {
  title?: string;
  description?: string;
  additionalText?: string;
  /** footer buttons; first non-ghost defaults to primary CTA */
  actions?: ModalAction[];
  /** slot rendered above the body content (e.g. a Stepper) */
  stepper?: React.ReactNode;
  /** slot for KPI segments / period pickers / inputs */
  children?: React.ReactNode;
  /** wrap in a full-screen dimmed overlay */
  overlay?: boolean;
  onClose?: () => void;
}

/**
 * Kinetic modal / dialog. Composable: heading, description, additional text,
 * optional stepper + arbitrary body content, and a footer of actions
 * (primary action = brand-orange CTA).
 */
export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  additionalText,
  actions = [],
  stepper,
  children,
  overlay = false,
  onClose,
}) => {
  const multi = actions.length > 2;
  const dialog = (
    <div className="k-modal" role="dialog" aria-modal="true" aria-label={title}>
      {(title || onClose) && (
        <div className="k-modal__header">
          <span className="k-modal__title">{title}</span>
          {onClose && (
            <button type="button" className="k-modal__close" aria-label="Close" onClick={onClose}>
              ×
            </button>
          )}
        </div>
      )}
      {stepper && <div style={{ padding: '8px 16px 0' }}>{stepper}</div>}
      <div className="k-modal__body">
        {description && <span className="k-modal__desc">{description}</span>}
        {children}
        {additionalText && <span className="k-modal__additional">{additionalText}</span>}
      </div>
      {actions.length > 0 && (
        <div className={`k-modal__footer${multi ? ' k-modal__footer--multi' : ''}`}>
          {actions.map((a, i) => (
            <button
              key={i}
              type="button"
              className={`k-modal-btn k-modal-btn--${a.variant ?? (i === actions.length - 1 ? 'primary' : 'ghost')}`}
              onClick={a.onClick}
            >
              {a.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  if (!overlay) return dialog;
  return (
    <div className="k-modal-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{dialog}</div>
    </div>
  );
};

export default Modal;
