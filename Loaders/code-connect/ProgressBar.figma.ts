// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=4316-16372
// source=Loaders/ProgressBar.tsx
// component=ProgressBar
import figma from 'figma';

const instance = figma.selectedInstance;
const infinite = instance.getEnum('Infinite', { True: true, False: false });

export default {
  example: figma.code`<ProgressBar ${infinite ? 'infinite' : 'value={40}'} />`,
  imports: ['import { ProgressBar } from "@kinetic-ui/loaders"'],
  id: 'kinetic-progress-bar',
  metadata: { nestable: true },
};
