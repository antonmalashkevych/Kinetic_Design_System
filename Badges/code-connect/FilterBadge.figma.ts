// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16639-26105
// source=Badges/FilterBadge.tsx
// component=FilterBadge
import figma from 'figma';

const instance = figma.selectedInstance;

const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<FilterBadge onRemove={() => {}}>${label}</FilterBadge>`,
  imports: ['import { FilterBadge } from "@kinetic-ui/badges"'],
  id: 'kinetic-filter-badge',
  metadata: { nestable: true },
};
