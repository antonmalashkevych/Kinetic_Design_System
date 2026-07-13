// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6825
// source=Tooltips/Tooltip.tsx
// component=Tooltip
import figma from 'figma';

const instance = figma.selectedInstance;

const hasHeadline = instance.getEnum('Headline', { True: true, False: false });
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const body =
  textLayers && textLayers[textLayers.length - 1] && textLayers[textLayers.length - 1].type === 'TEXT'
    ? textLayers[textLayers.length - 1].textContent
    : '';
const headline =
  hasHeadline && textLayers && textLayers[0] && textLayers[0].type === 'TEXT'
    ? textLayers[0].textContent
    : '';

export default {
  example: figma.code`<Tooltip ${hasHeadline && headline ? figma.code`headline="${headline}"` : ''}>${body}</Tooltip>`,
  imports: ['import { Tooltip } from "@kinetic-ui/tooltips"'],
  id: 'kinetic-tooltip',
  metadata: { nestable: true },
};
