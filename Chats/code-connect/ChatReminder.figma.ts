// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-10797
// source=Chats/ChatReminder.tsx
// component=ChatReminder
import figma from 'figma';
const instance = figma.selectedInstance;
const rows = instance.getEnum('Rows', { '1': 1, '2': 2, Empty: 1 });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : 'Reminder';
export default {
  example: figma.code`<ChatReminder title="${title}" rows={${rows}} onClose={() => {}} />`,
  imports: ['import { ChatReminder } from "@kinetic-ui/chats"'],
  id: 'kinetic-chat-reminder',
  metadata: { nestable: false },
};
