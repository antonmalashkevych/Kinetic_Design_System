// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15695
// source=Tabs/KpiSegments.tsx
// component=KpiSegments
import figma from 'figma';
const instance = figma.selectedInstance;
const segs = instance.findLayers((n) => n.type === 'INSTANCE');
let s0; let s1;
if (segs && segs[0] && segs[0].type === 'INSTANCE') s0 = segs[0].executeTemplate().example;
if (segs && segs[1] && segs[1].type === 'INSTANCE') s1 = segs[1].executeTemplate().example;
export default {
  example: figma.code`<KpiSegments>${s0}${s1}</KpiSegments>`,
  imports: ['import { KpiSegments } from "@kinetic-ui/tabs"'],
  id: 'kinetic-kpi-segments',
  metadata: { nestable: false },
};
