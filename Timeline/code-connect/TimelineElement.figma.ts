// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-10443
// source=Timeline/TimelineItem.tsx
// component=TimelineItem
import figma from 'figma';
const instance = figma.selectedInstance;
const type = instance.getEnum('Type', {
  Time: 'time',
  Date: 'date',
  Parameter: 'parameter',
  Timeline: 'timeline',
});
const detalization = instance.getEnum('Detalization', { Low: 'low', Medium: 'medium', High: 'high' });
const state = instance.getEnum('State', { Regular: 'regular', Collapsed: 'collapsed', Expanded: 'expanded' });
export default {
  example:
    type === 'timeline'
      ? figma.code`<DetalizationSwitcher value="${detalization}" />`
      : type === 'date'
      ? figma.code`<TimelineItem dot="solid"><TimelineDate date="Wed, Feb 12, 2020" /></TimelineItem>`
      : type === 'time'
      ? figma.code`<TimelineItem dot="hollow"><TimelineTime time="06:04 PM" person="Sappho" badge="FMC Fake FLO" /></TimelineItem>`
      : figma.code`<TimelineItem line><TimelineParameter label="Parameter" text="..." state="${state}" /></TimelineItem>`,
  imports: [
    'import { TimelineItem, TimelineTime, TimelineDate, TimelineParameter, DetalizationSwitcher } from "@kinetic-ui/timeline"',
  ],
  id: 'kinetic-timeline-element',
  metadata: { nestable: true },
};
