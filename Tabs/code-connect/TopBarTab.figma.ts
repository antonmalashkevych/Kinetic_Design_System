// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15898
// source=Tabs/TopBarTab.tsx
// component=TopBarTab
import figma from 'figma';
const instance = figma.selectedInstance;
const active = instance.getEnum('Active', { True: true, False: false });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
export default {
  example: figma.code`<TopBarTab ${active ? 'active' : ''}>${label}</TopBarTab>`,
  imports: ['import { TopBarTab } from "@kinetic-ui/tabs"'],
  id: 'kinetic-top-bar-tab',
  metadata: { nestable: true },
};
