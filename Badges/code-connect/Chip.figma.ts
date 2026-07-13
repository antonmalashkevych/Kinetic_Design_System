// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16612-7653
// source=Badges/Chip.tsx
// component=Chip
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', { Default: 'default', Highlighted: 'highlighted' });
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<Chip state="${state}">${label}</Chip>`,
  imports: ['import { Chip } from "@kinetic-ui/badges"'],
  id: 'kinetic-chip',
  metadata: { nestable: true },
};
