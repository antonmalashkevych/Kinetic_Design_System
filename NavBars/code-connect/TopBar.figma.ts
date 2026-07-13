// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16615-16395
// source=NavBars/TopBar.tsx
// component=TopBar
import figma from 'figma';
export default {
  example: figma.code`<TopBar leading={<Logo />} actions={<Actions />}>{tabs}</TopBar>`,
  imports: ['import { TopBar } from "@kinetic-ui/nav-bars"'],
  id: 'kinetic-topbar',
  metadata: { nestable: false },
};
