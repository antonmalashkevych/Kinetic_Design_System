// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15881
// source=Tabs/SegmentedControl.tsx
// component=Segment
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', { Default: false, Active: true, Disabled: false, Hover: false });
const disabled = instance.getEnum('State', { Default: false, Active: false, Disabled: true, Hover: false });
const hasTag = instance.getBoolean('tag');
const label = instance.getString('Text');
export default {
  example: figma.code`<Segment segmentStyle="ghost" ${state ? 'active' : ''} ${disabled ? 'disabled' : ''} ${hasTag ? 'tag={3}' : ''}>${label}</Segment>`,
  imports: ['import { Segment } from "@kinetic-ui/tabs"'],
  id: 'kinetic-segment-ghost',
  metadata: { nestable: true },
};
