// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15684
// source=Tabs/KpiSegments.tsx
// component=KpiSegment
import figma from 'figma';
const instance = figma.selectedInstance;
const selected = instance.getEnum('Selected', { True: true, False: false });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
const value = labels && labels[1] && labels[1].type === 'TEXT' ? labels[1].textContent : '';
export default {
  example: figma.code`<KpiSegment label="${label}" value="${value}" ${selected ? 'selected' : ''} />`,
  imports: ['import { KpiSegment } from "@kinetic-ui/tabs"'],
  id: 'kinetic-kpi-segment',
  metadata: { nestable: true },
};
