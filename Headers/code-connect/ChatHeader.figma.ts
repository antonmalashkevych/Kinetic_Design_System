// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-15399
// source=Headers/Header.tsx
// component=Header
import figma from 'figma';

const instance = figma.selectedInstance;
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<Header variant="chat" title="${title}" onCard />`,
  imports: ['import { Header } from "@kinetic-ui/headers"'],
  id: 'kinetic-header-chat',
  metadata: { nestable: false },
};
