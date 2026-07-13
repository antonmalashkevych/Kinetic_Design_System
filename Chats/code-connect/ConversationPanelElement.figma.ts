// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-10746
// source=Chats/MessageBubble.tsx
// component=MessageBubble
import figma from 'figma';
const instance = figma.selectedInstance;
const type = instance.getEnum('Type', {
  'My messages': 'mine',
  'Other messages': 'other',
  Date: 'date',
  Participants: 'participants',
  'Chat input': 'chat-input',
  'User group': 'user-group',
});
const labels = instance.findLayers((n) => n.type === 'TEXT');
const text = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
export default {
  example:
    type === 'chat-input'
      ? figma.code`<ChatInput onSend={() => {}} />`
      : type === 'date'
      ? figma.code`<DateSeparator label="${text}" />`
      : figma.code`<MessageBubble owner="${type === 'mine' ? 'mine' : 'other'}" text="${text}" />`,
  imports: ['import { MessageBubble, DateSeparator, ChatInput } from "@kinetic-ui/chats"'],
  id: 'kinetic-conversation-panel-element',
  metadata: { nestable: true },
};
