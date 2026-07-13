// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-10029
// source=EventItem/EventItem.tsx
// component=EventItem
import figma from 'figma';
const instance = figma.selectedInstance;
const count = instance.getEnum('Param count', {
  '1 parameter': 1,
  '2 parameters': 2,
  '3 parameters': 3,
  '4 parameters': 4,
});
const params = Array.from({ length: count }, () => '{ label: "Parameter", text: "..." }').join(', ');
export default {
  example: figma.code`<EventItem date="Wed, Feb 12, 2020" time="06:04 PM" person="Sappho" badge="FMC Fake FLO" parameters={[${params}]} />`,
  imports: ['import { EventItem } from "@kinetic-ui/event-item"'],
  id: 'kinetic-event-item',
  metadata: { nestable: false },
};
