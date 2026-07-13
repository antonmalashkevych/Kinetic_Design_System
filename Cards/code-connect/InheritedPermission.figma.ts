// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-14986
// source=Cards/Card.tsx
// component=Card
import figma from 'figma';
const instance = figma.selectedInstance;
const hover = instance.getEnum('State', { Hover: true, Default: false });
export default {
  example: figma.code`<Card title="Administrators" subtitle="Full system access with all permissions" action={<Badge>Access Role</Badge>} meta={<><ShieldIcon /> 32 permissions</>} hoverable ${hover ? 'hover' : ''} />`,
  imports: ['import { Card } from "@kinetic-ui/cards"'],
  id: 'kinetic-card-inherited-permission',
  metadata: { nestable: false },
};
