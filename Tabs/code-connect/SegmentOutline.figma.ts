// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15872
// source=Tabs/SegmentedControl.tsx
// component=Segment
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', { Default: false, Active: true, Hover: false, Disabled: false });
const disabled = instance.getEnum('State', { Default: false, Active: false, Hover: false, Disabled: true });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
export default {
  example: figma.code`<Segment segmentStyle="outline" ${state ? 'active' : ''} ${disabled ? 'disabled' : ''}>${label}</Segment>`,
  imports: ['import { Segment } from "@kinetic-ui/tabs"'],
  id: 'kinetic-segment-outline',
  metadata: { nestable: true },
};
