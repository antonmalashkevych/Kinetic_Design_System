// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-14604
// source=MenuItems/NameLabel.tsx
// component=NameLabel
import figma from 'figma';

const instance = figma.selectedInstance;
const labels = instance.findLayers((n) => n.type === 'TEXT');
const name = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
const meta = labels && labels[1] && labels[1].type === 'TEXT' ? labels[1].textContent : '';

export default {
  example: figma.code`<NameLabel name="${name}" ${meta ? figma.code`meta="${meta}"` : ''} />`,
  imports: ['import { NameLabel } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-name-label',
  metadata: { nestable: true },
};
