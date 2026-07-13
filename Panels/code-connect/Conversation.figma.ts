// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16627-29510
// source=Panels/Panel.tsx
// component=Panel
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', { List: 'list', Conversation: 'conversation', Settings: 'settings' });
export default {
  example: figma.code`<Panel title="Conversations" onClose={() => {}} ${state !== 'list' ? 'tabs={<Tabs />}' : ''}>
  {/* ${state} view */}
</Panel>`,
  imports: ['import { Panel } from "@kinetic-ui/panels"'],
  id: 'kinetic-panel-conversation',
  metadata: { nestable: false },
};
