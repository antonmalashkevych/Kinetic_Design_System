// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16607-688
// source=Buttons/AdditionalIconButton.tsx
// component=AdditionalIconButton
//
// Figma: Buttons/Icon button/Additional. Variants: State, Fill (Solid / Gradient).
import figma from 'figma';

const instance = figma.selectedInstance;

const fill = instance.getEnum('Fill', { Solid: 'solid', Gradient: 'gradient' });
const state = instance.getEnum('State', {
  Regular: 'regular',
  Hover: 'hover',
  Focus: 'focus',
  Disabled: 'disabled',
});
const disabled = state === 'disabled';

const iconLayers = instance.findLayers((n) => n.type === 'INSTANCE');
let iconCode;
if (iconLayers && iconLayers[0] && iconLayers[0].type === 'INSTANCE') {
  iconCode = iconLayers[0].executeTemplate().example;
}

export default {
  example: figma.code`<AdditionalIconButton
  fill="${fill}"
  aria-label="Action"
  ${disabled ? 'disabled' : ''}
  ${iconCode ? figma.code`icon={${iconCode}}` : ''}
/>`,
  imports: ['import { AdditionalIconButton } from "@kinetic-ui/buttons"'],
  id: 'kinetic-additional-icon-button',
  metadata: { nestable: false },
};
