// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-14748
// source=MenuItems/ProfileMenu.tsx
// component=ProfileMenu
import figma from 'figma';

const instance = figma.selectedInstance;
const variant = instance.getEnum('Property 1', { User: 'user', Admin: 'admin' });

export default {
  example: figma.code`<ProfileMenu variant="${variant}" />`,
  imports: ['import { ProfileMenu } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-profile-menu',
  metadata: { nestable: false },
};
