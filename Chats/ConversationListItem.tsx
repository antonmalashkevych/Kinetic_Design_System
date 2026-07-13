import React from 'react';
import './chats.css';

export type ConversationState = 'regular' | 'hover' | 'focus';

export interface ConversationListItemProps {
  name: string;
  preview?: string;
  avatar?: React.ReactNode;
  state?: ConversationState;
  newMessages?: number | boolean;
  onClick?: () => void;
}

/** Row in the conversations list. Hover/focus use indigo (selection). */
export const ConversationListItem: React.FC<ConversationListItemProps> = ({
  name,
  preview,
  avatar,
  state = 'regular',
  newMessages,
  onClick,
}) => {
  const cls = ['k-conv', state !== 'regular' && `k-conv--${state}`].filter(Boolean).join(' ');
  const count = typeof newMessages === 'number' ? newMessages : newMessages ? '' : null;
  return (
    <div className={cls} role="button" tabIndex={0} onClick={onClick}>
      {avatar}
      <div className="k-conv__body">
        <span className="k-conv__name">{name}</span>
        {preview && <span className="k-conv__preview">{preview}</span>}
      </div>
      {count !== null && <span className="k-conv__badge">{count}</span>}
    </div>
  );
};

export default ConversationListItem;
