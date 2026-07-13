// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-5795
// source=Switchers/SegmentedSwitch.tsx
// component=SegmentedSwitch
import figma from 'figma';

const instance = figma.selectedInstance;

const activeIndex = instance.getEnum('Active', { '1': 1, '2': 2 });

export default {
  example: figma.code`<SegmentedSwitch items={['One', 'Two']} activeIndex={${activeIndex}} />`,
  imports: ['import { SegmentedSwitch } from "@kinetic-ui/switchers"'],
  id: 'kinetic-segmented-switch',
  metadata: { nestable: false },
};
