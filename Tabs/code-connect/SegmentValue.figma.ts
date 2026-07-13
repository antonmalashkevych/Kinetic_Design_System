// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15677
// source=Tabs/KpiSegments.tsx
// component=KpiSegment
import figma from 'figma';
const instance = figma.selectedInstance;
const colorIndex = instance.getEnum('Color Index', { Positive: 'positive', Neutral: 'neutral', Bad: 'bad' });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const value = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
export default {
  example: figma.code`<KpiSegment colorIndex="${colorIndex}" value="${value}" />`,
  imports: ['import { KpiSegment } from "@kinetic-ui/tabs"'],
  id: 'kinetic-segment-value',
  metadata: { nestable: true },
};
