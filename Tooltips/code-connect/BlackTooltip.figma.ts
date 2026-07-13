// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6835
// source=Tooltips/BlackTooltip.tsx
// component=BlackTooltip
import figma from 'figma';

const instance = figma.selectedInstance;
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const body =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<BlackTooltip>${body}</BlackTooltip>`,
  imports: ['import { BlackTooltip } from "@kinetic-ui/tooltips"'],
  id: 'kinetic-black-tooltip',
  metadata: { nestable: true },
};
