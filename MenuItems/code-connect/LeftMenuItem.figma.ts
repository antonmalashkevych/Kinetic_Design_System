// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-14867
// source=MenuItems/LeftMenuItem.tsx
// component=LeftMenuItem
import figma from 'figma';

const instance = figma.selectedInstance;
const type = instance.getEnum('Type', {
  Folder: 'folder', Report: 'report', Segment: 'segment', 'Text item': 'text',
  'Special Project': 'specialProject', 'Import to SP button': 'importButton', Members: 'members',
});
const state = instance.getEnum('State', { Regular: 'regular', Hover: 'hover', Focus: 'focus', Selected: 'selected' });
const hasCount = instance.getBoolean('Count');
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<LeftMenuItem
  type="${type}"
  label="${label}"
  ${state === 'selected' ? 'selected' : ''}
  ${hasCount ? 'count={3}' : ''}
/>`,
  imports: ['import { LeftMenuItem } from "@kinetic-ui/menu-items"'],
  id: 'kinetic-left-menu-item',
  metadata: { nestable: true },
};
