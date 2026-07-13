// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-10715
// source=Chats/ConversationListItem.tsx
// component=ConversationListItem
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', { Regular: 'regular', Hover: 'hover', Focus: 'focus' });
const newMessages = instance.getBoolean('New messages');
export default {
  example: figma.code`<ConversationListItem name="Name" preview="Last message" state="${state}" ${newMessages ? 'newMessages={2}' : ''} />`,
  imports: ['import { ConversationListItem } from "@kinetic-ui/chats"'],
  id: 'kinetic-conversation-list-item',
  metadata: { nestable: false },
};
