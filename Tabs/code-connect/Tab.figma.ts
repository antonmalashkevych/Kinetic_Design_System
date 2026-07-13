// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15439
// source=Tabs/Tabs.tsx
// component=Tab
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', { Active: 'active', Inactive: 'inactive', Disabled: 'disabled', Hover: 'hover', Focus: 'focus' });
const label = instance.getString('Text');
export default {
  example: figma.code`<Tab ${state === 'active' ? 'active' : ''} ${state === 'disabled' ? 'disabled' : ''}>${label}</Tab>`,
  imports: ['import { Tab } from "@kinetic-ui/tabs"'],
  id: 'kinetic-tab',
  metadata: { nestable: true },
};
