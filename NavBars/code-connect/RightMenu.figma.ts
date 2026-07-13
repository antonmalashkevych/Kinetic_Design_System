// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16615-16313
// source=NavBars/NavRail.tsx
// component=NavRail
import figma from 'figma';
const instance = figma.selectedInstance;
const ana = instance.getBoolean('Ana');
export default {
  example: figma.code`<NavRail side="right" ${ana ? 'ana' : ''}>{items}</NavRail>`,
  imports: ['import { NavRail } from "@kinetic-ui/nav-bars"'],
  id: 'kinetic-nav-rail-right',
  metadata: { nestable: false },
};
