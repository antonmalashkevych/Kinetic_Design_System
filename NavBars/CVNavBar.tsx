import React from 'react';
import './navbars.css';

export interface CVNavBarProps {
  /** Figma: Back UM — show the back button. */
  backButton?: boolean;
  /** Figma: Chevron — show a trailing chevron. */
  chevron?: boolean;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  onBack?: () => void;
  className?: string;
}

const ArrowLeft = () => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/**
 * Kinetic CV (content view) navigation bar.
 * Figma component set: Navigation bars/CV navigation bar (node 1-15).
 */
export const CVNavBar: React.FC<CVNavBarProps> = ({ backButton = false, chevron = false, title, actions, onBack, className = '' }) => (
  <div className={['k-cv-navbar', className].filter(Boolean).join(' ')}>
    {backButton ? (
      <button type="button" className="k-cv-navbar__back" onClick={onBack} aria-label="Back">
        <ArrowLeft />
      </button>
    ) : null}
    {title != null ? <span className="k-cv-navbar__title">{title}</span> : null}
    {chevron ? <span className="k-cv-navbar__chevron"><ChevronRight /></span> : null}
    {actions != null ? <div className="k-cv-navbar__actions">{actions}</div> : null}
  </div>
);

export default CVNavBar;
