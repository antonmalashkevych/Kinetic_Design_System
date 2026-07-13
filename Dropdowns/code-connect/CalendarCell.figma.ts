// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-7637
// source=Dropdowns/Calendar.tsx
// component=CalendarCell
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  'Day name': 'dayname',
  Default: 'default',
  'Other mounth': 'other',
  Today: 'today',
  Selected: 'selected',
  Hover: 'hover',
});
export default {
  example: figma.code`<CalendarCell value={1} state="${state}" />`,
  imports: ['import { CalendarCell } from "@kinetic-ui/dropdowns"'],
  id: 'kinetic-calendar-cell',
  metadata: { nestable: true },
};
