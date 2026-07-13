// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-15078
// source=Cards/Card.tsx
// component=Card
import figma from 'figma';
export default {
  example: figma.code`<Card title="Administrators" action={<><MembersCount value={64} /><Chevron /></>} chips={<>{roleChips}<Chip>+6 More</Chip></>} hoverable />`,
  imports: ['import { Card } from "@kinetic-ui/cards"'],
  id: 'kinetic-card-flo',
  metadata: { nestable: false },
};
