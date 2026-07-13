import React from 'react';
import './chats.css';

export type MessageOwner = 'mine' | 'other' | 'ana' | 'user-response';

export interface MessageBubbleProps {
  owner?: MessageOwner;
  text: string;
  time?: string;
  author?: string;
  read?: boolean;
}

/** A single chat message. Own and other messages share the neutral bubble surface. */
export const MessageBubble: React.FC<MessageBubbleProps> = ({
  owner = 'other',
  text,
  time,
  author,
  read,
}) => (
  <div className={`k-msg k-msg--${owner}`}>
    <span className="k-msg__meta">
      {read && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {author && <span>{author}</span>}
      {time && <span>{time}</span>}
    </span>
    <div className="k-msg__bubble">{text}</div>
  </div>
);

export interface DateSeparatorProps {
  label: string;
}

export const DateSeparator: React.FC<DateSeparatorProps> = ({ label }) => (
  <div className="k-chat-date">{label}</div>
);

export default MessageBubble;
