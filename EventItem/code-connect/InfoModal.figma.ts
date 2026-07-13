// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-10264
// source=EventItem/InfoModal.tsx
// component=InfoModal
import figma from 'figma';
const instance = figma.selectedInstance;
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : 'Info';
export default {
  example: figma.code`<InfoModal title="${title}" onClose={() => {}}>Details...</InfoModal>`,
  imports: ['import { InfoModal } from "@kinetic-ui/event-item"'],
  id: 'kinetic-info-modal',
  metadata: { nestable: false },
};
