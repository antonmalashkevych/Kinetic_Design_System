// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-7654
// source=Dropdowns/Calendar.tsx
// component=Calendar
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Regular: 'regular',
  'Date selected': 'date-selected',
  'Period selected': 'period-selected',
});
export default {
  example: figma.code`<Calendar state="${state}">{cells}</Calendar>`,
  imports: ['import { Calendar } from "@kinetic-ui/dropdowns"'],
  id: 'kinetic-calendar',
  metadata: { nestable: false },
};
