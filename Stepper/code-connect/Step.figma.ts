// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15915
// source=Stepper/Step.tsx
// component=Step
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Inactive: 'inactive', Current: 'current', Done: 'done', Interacted: 'interacted',
});
export default {
  example: figma.code`<Step state="${state}" />`,
  imports: ['import { Step } from "@kinetic-ui/stepper"'],
  id: 'kinetic-step',
  metadata: { nestable: true },
};
