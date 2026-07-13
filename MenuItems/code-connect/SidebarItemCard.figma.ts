// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-14621
// source=MenuItems/SidebarItemCard.tsx
// component=SidebarItemCard
import figma from 'figma';

const instance = figma.selectedInstance;
const state = instance.getEnum('State', { Default: 'default', Disabled: 'disabled', Hover: 'hover', Active: 'active' });
const view = instance.getEnum('View', { Full: 'full', Colapsed: 'collapsed' });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<SidebarItemCard
  view="${view}"
  title="${title}"
  ${state === 'active' ? 'active' : ''}
  ${state === 'disabled' ? 'disabled' : ''}
/>`,
  imports: ['import { SidebarItemCard } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-sidebar-item-card',
  metadata: { nestable: true },
};
