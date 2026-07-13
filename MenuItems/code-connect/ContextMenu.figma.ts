// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-14724
// source=MenuItems/ContextMenu.tsx
// component=ContextMenu
import figma from 'figma';

const instance = figma.selectedInstance;
// Menu rows resolve dynamically via their own templates.
const rows = instance.findLayers((n) => n.type === 'INSTANCE');
let r0;
let r1;
if (rows && rows[0] && rows[0].type === 'INSTANCE') r0 = rows[0].executeTemplate().example;
if (rows && rows[1] && rows[1].type === 'INSTANCE') r1 = rows[1].executeTemplate().example;

export default {
  example: figma.code`<ContextMenu>${r0}${r1}</ContextMenu>`,
  imports: ['import { ContextMenu } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-context-menu',
  metadata: { nestable: false },
};
