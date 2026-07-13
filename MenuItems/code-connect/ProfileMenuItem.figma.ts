// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-14725
// source=MenuItems/ProfileMenuItem.tsx
// component=ProfileMenuItem
import figma from 'figma';

const instance = figma.selectedInstance;
const state = instance.getEnum('State', { Regular: 'regular', Hover: 'hover', Selected: 'selected' });
const admin = instance.getEnum('User/Admin', { True: true, False: false });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const name = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<ProfileMenuItem name="${name}" ${admin ? 'admin' : ''} ${state === 'selected' ? 'selected' : ''} />`,
  imports: ['import { ProfileMenuItem } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-profile-menu-item',
  metadata: { nestable: true },
};
