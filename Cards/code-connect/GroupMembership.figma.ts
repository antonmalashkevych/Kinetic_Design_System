// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-14945
// source=Cards/Card.tsx
// component=Card
import figma from 'figma';
const instance = figma.selectedInstance;
const hover = instance.getEnum('State', { Hover: true, Default: false });
export default {
  example: figma.code`<Card title="Create users" subtitle="Create new user accounts" hoverable ${hover ? 'hover' : ''} chips={chips} />`,
  imports: ['import { Card } from "@kinetic-ui/cards"'],
  id: 'kinetic-card-group-membership',
  metadata: { nestable: false },
};
