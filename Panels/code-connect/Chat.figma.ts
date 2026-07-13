// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-23572
// source=Panels/Panel.tsx
// component=Panel
import figma from 'figma';
export default {
  example: figma.code`<Panel title="Chat" onClose={() => {}} footer={<ChatInput onSend={() => {}} />}>
  {/* MessageBubble list */}
</Panel>`,
  imports: ['import { Panel } from "@kinetic-ui/panels"'],
  id: 'kinetic-panel-chat',
  metadata: { nestable: false },
};
