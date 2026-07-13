// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16612-7658
// source=Badges/StatusBadge.tsx
// component=StatusBadge
import figma from 'figma';

const instance = figma.selectedInstance;

const status = instance.getEnum('Status', {
  Active: 'active',
  Inactive: 'inactive',
  Pending: 'pending',
});
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<StatusBadge status="${status}">${label}</StatusBadge>`,
  imports: ['import { StatusBadge } from "@kinetic-ui/badges"'],
  id: 'kinetic-status-badge',
  metadata: { nestable: true },
};
