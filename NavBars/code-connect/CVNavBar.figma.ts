// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16615-17510
// source=NavBars/CVNavBar.tsx
// component=CVNavBar
import figma from 'figma';
const instance = figma.selectedInstance;
const backButton = instance.getBoolean('Back UM');
const chevron = instance.getBoolean('Chevron');
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';
export default {
  example: figma.code`<CVNavBar ${backButton ? 'backButton' : ''} ${chevron ? 'chevron' : ''} title="${title}" />`,
  imports: ['import { CVNavBar } from "@kinetic-ui/nav-bars"'],
  id: 'kinetic-cv-navbar',
  metadata: { nestable: false },
};
