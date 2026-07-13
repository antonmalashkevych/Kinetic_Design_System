// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6145
// source=Checkboxes/RecoListItem.tsx
// component=RecoListItem
import figma from 'figma';

const instance = figma.selectedInstance;

const informationIcon = instance.getEnum('Information Icon', { True: true, False: false });
const isNew = instance.getEnum('New', { True: true, False: false });
const reprioritize = instance.getEnum('Reprioritize', { True: true, False: false });
const dragDrop = instance.getEnum('Drag&Drop', { True: true, False: false });
const contextMenu = instance.getEnum('Context Menu', { True: true, False: false });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<RecoListItem
  title="${title}"
  ${informationIcon ? 'informationIcon' : ''}
  ${isNew ? 'isNew' : ''}
  ${reprioritize ? 'reprioritize' : ''}
  ${dragDrop ? 'dragDrop' : ''}
  ${contextMenu ? 'contextMenu' : ''}
/>`,
  imports: ['import { RecoListItem } from "@kinetic-ui/checkboxes"'],
  id: 'kinetic-reco-list-item',
  metadata: { nestable: true },
};
