// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-6527
// source=Dropdowns/TimePicker.tsx
// component=TimePicker
import figma from 'figma';
const instance = figma.selectedInstance;
const activated = instance.getBoolean('Activated');
const showAmPm = instance.getBoolean('Show AM/PM');
const timeFormat = instance.getEnum('Time Format', {
  'HH:MM': 'HH:MM',
  'HH:MM:SS': 'HH:MM:SS',
});
export default {
  example: figma.code`<TimePicker timeFormat="${timeFormat}" ${showAmPm ? 'showAmPm' : ''} ${activated ? 'activated' : ''} />`,
  imports: ['import { TimePicker } from "@kinetic-ui/dropdowns"'],
  id: 'kinetic-time-picker',
  metadata: { nestable: false },
};
