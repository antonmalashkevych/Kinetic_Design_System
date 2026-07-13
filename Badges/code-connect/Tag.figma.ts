// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16612-7648
// source=Badges/Tag.tsx
// component=Tag
import figma from 'figma';

const instance = figma.selectedInstance;

const color = instance.getEnum('Color', { Grey: 'grey', Brand: 'brand' });
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<Tag color="${color}">${label}</Tag>`,
  imports: ['import { Tag } from "@kinetic-ui/badges"'],
  id: 'kinetic-tag',
  metadata: { nestable: true },
};
