import React from 'react';
import './panels.css';

export interface PanelProps {
  title?: React.ReactNode;
  headerIcon?: React.ReactNode;
  /** tab bar slot, rendered under the header (e.g. Tabs component) */
  tabs?: React.ReactNode;
  /** footer slot for actions */
  footer?: React.ReactNode;
  /** remove body padding (for edge-to-edge lists) */
  flush?: boolean;
  width?: number | string;
  children?: React.ReactNode;
  onClose?: () => void;
}

/**
 * Generic side/overlay panel shell used across the app (Conversation, Flo,
 * Action, Item History, Reports, Alerts, etc.). Composes header + optional
 * tab bar + scrollable body + optional footer.
 */
export const Panel: React.FC<PanelProps> = ({
  title,
  headerIcon,
  tabs,
  footer,
  flush,
  width,
  children,
  onClose,
}) => (
  <div className="k-panel" style={width ? { width } : undefined}>
    {(title || onClose || headerIcon) && (
      <div className="k-panel__header">
        {headerIcon && <span className="k-panel__header-icon">{headerIcon}</span>}
        <span className="k-panel__title">{title}</span>
        {onClose && (
          <button type="button" className="k-panel__close" aria-label="Close panel" onClick={onClose}>
            ×
          </button>
        )}
      </div>
    )}
    {tabs && <div className="k-panel__tabs">{tabs}</div>}
    <div className={`k-panel__body${flush ? ' k-panel__body--flush' : ''}`}>{children}</div>
    {footer && <div className="k-panel__footer">{footer}</div>}
  </div>
);

export default Panel;
