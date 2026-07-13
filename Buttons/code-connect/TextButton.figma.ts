// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16606-546
// source=Buttons/TextButton.tsx
// component=TextButton
//
// Figma: Buttons/Text button. Only a State variant; the label comes from a text layer.
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('👁 State', {
  Regular: 'regular',
  Hover: 'hover',
  Focus: 'focus',
  Disabled: 'disabled',
});
const disabled = state === 'disabled';

const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT'
    ? textLayers[0].textContent
    : '';

export default {
  example: figma.code`<TextButton ${disabled ? 'disabled' : ''}>${label}</TextButton>`,
  imports: ['import { TextButton } from "@kinetic-ui/buttons"'],
  id: 'kinetic-text-button',
  metadata: { nestable: true },
};
