// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6816
// source=Tooltips/InfoTooltip.tsx
// component=InfoTooltip
import figma from 'figma';

const instance = figma.selectedInstance;
const open = instance.getEnum('Tooltip', { True: true, False: false });
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const body =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<InfoTooltip ${open ? 'open' : ''}>${body}</InfoTooltip>`,
  imports: ['import { InfoTooltip } from "@kinetic-ui/tooltips"'],
  id: 'kinetic-info-tooltip',
  metadata: { nestable: true },
};
