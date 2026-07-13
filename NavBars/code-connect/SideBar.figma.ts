// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16615-16951
// source=NavBars/SideBar.tsx
// component=SideBar
import figma from 'figma';
const instance = figma.selectedInstance;
const collapsed = instance.getEnum('Collapse', { True: true, False: false });
export default {
  example: figma.code`<SideBar ${collapsed ? 'collapsed' : ''}>{items}</SideBar>`,
  imports: ['import { SideBar } from "@kinetic-ui/nav-bars"'],
  id: 'kinetic-sidebar',
  metadata: { nestable: false },
};
