// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16606-493
// source=Buttons/OutlineButton.tsx
// component=OutlineButton
//
// Figma: Buttons/Outline. Variants: State, View (Full / Icon); boolean: icon.
import figma from 'figma';

const instance = figma.selectedInstance;

const view = instance.getEnum('View', { Full: 'full', Icon: 'icon' });
const state = instance.getEnum('State', {
  Default: 'default',
  Regular: 'regular',
  Hover: 'hover',
  Disabled: 'disabled',
  Active: 'active',
});
const showIcon = instance.getBoolean('icon');
const disabled = state === 'disabled';
const active = state === 'active';

const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT'
    ? textLayers[0].textContent
    : '';
const iconLayers = instance.findLayers((n) => n.type === 'INSTANCE');
let iconCode;
if (iconLayers && iconLayers[0] && iconLayers[0].type === 'INSTANCE') {
  iconCode = iconLayers[0].executeTemplate().example;
}

export default {
  example: figma.code`<OutlineButton
  view="${view}"
  ${showIcon ? 'showIcon' : ''}
  ${active ? 'active' : ''}
  ${disabled ? 'disabled' : ''}
  ${iconCode ? figma.code`icon={${iconCode}}` : ''}
>${view === 'icon' ? '' : label}</OutlineButton>`,
  imports: ['import { OutlineButton } from "@kinetic-ui/buttons"'],
  id: 'kinetic-outline-button',
  metadata: { nestable: false },
};
