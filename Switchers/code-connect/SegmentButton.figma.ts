// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-5788
// source=Switchers/SegmentedSwitch.tsx
// component=SegmentButton
import figma from 'figma';

const instance = figma.selectedInstance;

const active = instance.getEnum('State', { Default: false, Hover: false, Active: true });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<SegmentButton ${active ? 'active' : ''}>${label}</SegmentButton>`,
  imports: ['import { SegmentButton } from "@kinetic-ui/switchers"'],
  id: 'kinetic-segment-button',
  metadata: { nestable: true },
};
