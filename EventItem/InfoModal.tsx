import React from 'react';
import './eventitem.css';

export interface InfoModalProps {
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

/** Lightweight informational modal used alongside event items. */
export const InfoModal: React.FC<InfoModalProps> = ({ title, children, onClose }) => (
  <div className="k-infomodal" role="dialog" aria-label={title}>
    <div className="k-infomodal__head">
      <span className="k-infomodal__icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 8v4M9 5.5h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="k-infomodal__title">{title}</span>
      {onClose && (
        <button type="button" className="k-infomodal__close" aria-label="Close" onClick={onClose}>×</button>
      )}
    </div>
    <div className="k-infomodal__body">{children}</div>
  </div>
);

export default InfoModal;
