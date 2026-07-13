// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15573
// source=Tabs/SegmentedControl.tsx
// component=SegmentedControl
import figma from 'figma';
const instance = figma.selectedInstance;
const segs = instance.findLayers((n) => n.type === 'INSTANCE');
let s0; let s1;
if (segs && segs[0] && segs[0].type === 'INSTANCE') s0 = segs[0].executeTemplate().example;
if (segs && segs[1] && segs[1].type === 'INSTANCE') s1 = segs[1].executeTemplate().example;
export default {
  example: figma.code`<SegmentedControl>${s0}${s1}</SegmentedControl>`,
  imports: ['import { SegmentedControl } from "@kinetic-ui/tabs"'],
  id: 'kinetic-segmented-control',
  metadata: { nestable: false },
};
