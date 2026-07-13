// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15470
// source=Tabs/Tabs.tsx
// component=Tabs
import figma from 'figma';
const instance = figma.selectedInstance;
const tabs = instance.findLayers((n) => n.type === 'INSTANCE');
let t0; let t1;
if (tabs && tabs[0] && tabs[0].type === 'INSTANCE') t0 = tabs[0].executeTemplate().example;
if (tabs && tabs[1] && tabs[1].type === 'INSTANCE') t1 = tabs[1].executeTemplate().example;
export default {
  example: figma.code`<Tabs>${t0}${t1}</Tabs>`,
  imports: ['import { Tabs } from "@kinetic-ui/tabs"'],
  id: 'kinetic-tabs',
  metadata: { nestable: false },
};
