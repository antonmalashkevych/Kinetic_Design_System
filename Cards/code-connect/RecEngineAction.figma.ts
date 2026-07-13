// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-15193
// source=Cards/RecActionCard.tsx
// component=RecActionCard
import figma from 'figma';
const instance = figma.selectedInstance;
const labels = instance.findLayers((n) => n.type === 'TEXT');
const message = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : 'Do you want to save?';
export default {
  example: figma.code`<RecActionCard message="${message}" onSave={() => {}} onCancel={() => {}} />`,
  imports: ['import { RecActionCard } from "@kinetic-ui/cards"'],
  id: 'kinetic-card-rec-action',
  metadata: { nestable: false },
};
