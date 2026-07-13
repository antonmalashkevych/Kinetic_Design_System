// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16606-1518
// source=Buttons/IconButton.tsx
// component=IconButton
//
// Figma: Buttons/Icon button. Variant property names include emoji prefixes exactly
// as authored in Figma (☝️Accent, 👁 State, 🍞 Shape, 📐 Size, Fill).
import figma from 'figma';

const instance = figma.selectedInstance;

const accent = instance.getEnum('☝️Accent', {
  Primary: 'primary',
  Secondary: 'secondary',
  Button: 'button',
});
const shape = instance.getEnum('🍞 Shape', {
  Round: 'round',
  Rectangle: 'rectangle',
});
const size = instance.getEnum('📐 Size', { Medium: 'medium', Small: 'small' });
const fill = instance.getEnum('Fill', { True: true, False: false });
const state = instance.getEnum('👁 State', {
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
  example: figma.code`<IconButton
  accent="${accent}"
  shape="${shape}"
  size="${size}"
  ${fill ? '' : 'fill={false}'}
  aria-label="Action"
  ${disabled ? 'disabled' : ''}
  ${iconCode ? figma.code`icon={${iconCode}}` : ''}
/>`,
  imports: ['import { IconButton } from "@kinetic-ui/buttons"'],
  id: 'kinetic-icon-button',
  metadata: { nestable: false },
};
