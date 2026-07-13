import React from 'react';
import './chats.css';

export interface ChatReminderProps {
  icon?: React.ReactNode;
  title: string;
  rows?: 1 | 2;
  subtitle?: string;
  onClose?: () => void;
}

/** Pinned reminder / context bar shown above a conversation. */
export const ChatReminder: React.FC<ChatReminderProps> = ({ icon, title, rows = 1, subtitle, onClose }) => (
  <div className="k-chat-reminder">
    {icon}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
      <span style={{ fontWeight: 600 }}>{title}</span>
      {rows === 2 && subtitle && <span style={{ color: 'var(--kinetic-text-secondary)', fontSize: 12 }}>{subtitle}</span>}
    </div>
    {onClose && (
      <button type="button" className="k-chat-reminder__close" aria-label="Dismiss" onClick={onClose}>
        ×
      </button>
    )}
  </div>
);

export default ChatReminder;
