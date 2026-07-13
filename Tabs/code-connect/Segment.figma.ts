// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15559
// source=Tabs/SegmentedControl.tsx
// component=Segment
import figma from 'figma';
const instance = figma.selectedInstance;
const active = instance.getEnum('Active', { Active: true, Inactive: false, Focus: false, Hover: false });
const label = instance.getString('Text');
export default {
  example: figma.code`<Segment ${active ? 'active' : ''}>${label}</Segment>`,
  imports: ['import { Segment } from "@kinetic-ui/tabs"'],
  id: 'kinetic-segment',
  metadata: { nestable: true },
};
