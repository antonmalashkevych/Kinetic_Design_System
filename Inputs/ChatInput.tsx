import React from 'react';
import './inputs.css';

/** Figma: Inputs/Chat — State */
export type ChatState = 'placeholder' | 'typing' | 'active';

export interface ChatInputProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** Figma: State (Placeholder / Typing / Active) */
  state?: ChatState;
  placeholder?: string;
  onSend?: () => void;
  sendIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const SendIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 10l14-6-6 14-2-6-6-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

/**
 * Kinetic chat composer.
 * Figma component set: Inputs/Chat (node 16622-23253).
 */
export const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
  function ChatInput(
    { state = 'placeholder', placeholder = 'Type a message…', onSend, sendIcon, disabled, className = '', ...rest },
    ref,
  ) {
    const empty = state === 'placeholder';
    return (
      <div className={['k-chat', className].filter(Boolean).join(' ')} data-state={state}>
        <textarea
          ref={ref}
          rows={1}
          className="k-chat__input"
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        <button
          type="button"
          className="k-chat__send"
          onClick={onSend}
          disabled={disabled || empty}
          aria-label="Send message"
        >
          {sendIcon ?? <SendIcon />}
        </button>
      </div>
    );
  },
);

export default ChatInput;
