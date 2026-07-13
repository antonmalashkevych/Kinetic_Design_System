// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15926
// source=Stepper/Stepper.tsx
// component=Stepper
import figma from 'figma';
const instance = figma.selectedInstance;
const current = instance.getEnum('Step', { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 });
const total = instance.getEnum('# of steps', { '2': 2, '3': 3, '4': 4, '5': 5 });
export default {
  example: figma.code`<Stepper current={${current}} steps={${JSON.stringify(Array.from({ length: total }, (_, i) => 'Step ' + (i + 1)))}} />`,
  imports: ['import { Stepper } from "@kinetic-ui/stepper"'],
  id: 'kinetic-stepper',
  metadata: { nestable: false },
};
