// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6444
// source=Checkboxes/RecoListWindow.tsx
// component=RecoListWindow
import figma from 'figma';

const instance = figma.selectedInstance;

// Rows resolve dynamically via their own RecoListItem templates.
const rows = instance.findLayers((n) => n.type === 'INSTANCE');
let r0;
let r1;
if (rows && rows[0] && rows[0].type === 'INSTANCE') r0 = rows[0].executeTemplate().example;
if (rows && rows[1] && rows[1].type === 'INSTANCE') r1 = rows[1].executeTemplate().example;

export default {
  example: figma.code`<RecoListWindow>${r0}${r1}</RecoListWindow>`,
  imports: ['import { RecoListWindow } from "@kinetic-ui/checkboxes"'],
  id: 'kinetic-reco-list-window',
  metadata: { nestable: false },
};
