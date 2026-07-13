import React from 'react';
import './chats.css';

export interface ChatInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  onSend?: () => void;
  disabled?: boolean;
}

/** Message composer with brand-orange send CTA. */
export const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = 'Type a message',
  value,
  onChange,
  onSend,
  disabled,
}) => (
  <div className="k-chat-input">
    <input
      className="k-chat-input__field"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSend?.();
      }}
    />
    <button
      type="button"
      className="k-chat-input__send"
      aria-label="Send message"
      disabled={disabled || !value}
      onClick={onSend}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M3 10l14-6-6 14-2-6-6-2z" fill="currentColor" />
      </svg>
    </button>
  </div>
);

export default ChatInput;
