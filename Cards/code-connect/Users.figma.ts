// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-15046
// source=Cards/UserCard.tsx
// component=UserCard
import figma from 'figma';
const instance = figma.selectedInstance;
const hover = instance.getEnum('State', { Hover: true, Default: false });
export default {
  example: figma.code`<UserCard name="Kenneth Ross" email="kenneth.ross@company.com" status="active" ${hover ? 'hover' : ''} />`,
  imports: ['import { UserCard } from "@kinetic-ui/cards"'],
  id: 'kinetic-card-users',
  metadata: { nestable: false },
};
