// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15077
// source=MenuItems/MenuBarItem.tsx
// component=MenuBarItem
import figma from 'figma';

const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Regular: 'regular', Hover: 'hover', Focus: 'focus', Disabled: 'disabled',
  Selected: 'selected', 'New message': 'new',
});
const menu = instance.getEnum('Menu', { Left: 'left', Right: 'right' });

export default {
  example: figma.code`<MenuBarItem
  menu="${menu}"
  aria-label="Menu"
  ${state === 'selected' ? 'selected' : ''}
  ${state === 'new' ? 'badge' : ''}
  ${state === 'disabled' ? 'disabled' : ''}
  icon={<Icon />}
/>`,
  imports: ['import { MenuBarItem } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-menu-bar-item',
  metadata: { nestable: true },
};
