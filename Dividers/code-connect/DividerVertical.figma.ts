// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-1543
// source=Dividers/Divider.tsx
// component=Divider
import figma from 'figma';

const instance = figma.selectedInstance;
const type = instance.getEnum('Type', { Default: 'default', Muted: 'muted' });

export default {
  example: figma.code`<Divider orientation="vertical" type="${type}" />`,
  imports: ['import { Divider } from "@kinetic-ui/dividers"'],
  id: 'kinetic-divider-vertical',
  metadata: { nestable: true },
};
