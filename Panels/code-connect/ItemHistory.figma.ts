// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16626-24591
// source=Panels/Panel.tsx
// component=Panel
import figma from 'figma';
const instance = figma.selectedInstance;
const detalization = instance.getEnum('Detalization', { Low: 'low', Medium: 'medium', High: 'high' });
const infoModal = instance.getBoolean('Info modal');
export default {
  example: figma.code`<Panel title="Item History" onClose={() => {}}>
  <DetalizationSwitcher value="${detalization}" />
  {/* timeline of events */}
  ${infoModal ? '<InfoModal title="Info" />' : ''}
</Panel>`,
  imports: ['import { Panel } from "@kinetic-ui/panels"'],
  id: 'kinetic-panel-item-history',
  metadata: { nestable: false },
};
