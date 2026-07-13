import React from 'react';
import './cards.css';

export interface RecActionCardProps {
  message: string;
  saveLabel?: string;
  cancelLabel?: string;
  onSave?: () => void;
  onCancel?: () => void;
}

/** Recommendation-engine action prompt (Save = brand-orange CTA, Cancel = ghost). */
export const RecActionCard: React.FC<RecActionCardProps> = ({
  message,
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  onSave,
  onCancel,
}) => (
  <div className="k-rec-card">
    <span className="k-rec-card__msg">{message}</span>
    <div className="k-rec-card__actions">
      <button type="button" className="k-rec-btn k-rec-btn--save" onClick={onSave}>{saveLabel}</button>
      <button type="button" className="k-rec-btn k-rec-btn--cancel" onClick={onCancel}>{cancelLabel}</button>
    </div>
  </div>
);

export default RecActionCard;
