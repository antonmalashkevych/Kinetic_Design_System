// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16606-563
// source=Buttons/Button.tsx
// component=Button
//
// Figma: Buttons/General. Property names must match get_context_for_code_connect
// output exactly (clean names for TEXT/INSTANCE_SWAP, variant names for VARIANT).
import figma from 'figma';

const instance = figma.selectedInstance;

const label = instance.getString('Text');
const variant = instance.getEnum('Type', {
  Primary: 'primary',
  Secondary: 'secondary',
  'Secondary 2': 'secondary2',
});
const size = instance.getEnum('Size', {
  Normal: 'normal',
  Small: 'small',
  Wider: 'wider',
});
const showIcon = instance.getEnum('Show Icon', { True: true, False: false });
const showChevron = instance.getEnum('Show Chevron', { True: true, False: false });
const state = instance.getEnum('State', {
  Regular: 'regular',
  Hover: 'hover',
  Focus: 'focus',
  Disabled: 'disabled',
  Activated: 'activated',
});
const disabled = state === 'disabled';
const active = state === 'activated';

const iconSwap = instance.getInstanceSwap('Icon');
let iconCode;
if (iconSwap && iconSwap.type === 'INSTANCE') {
  iconCode = iconSwap.executeTemplate().example;
}

export default {
  example: figma.code`<Button
  variant="${variant}"
  size="${size}"
  ${showIcon ? 'showIcon' : ''}
  ${showChevron ? 'showChevron' : ''}
  ${active ? 'active' : ''}
  ${disabled ? 'disabled' : ''}
  ${iconCode ? figma.code`icon={${iconCode}}` : ''}
>${label}</Button>`,
  imports: ['import { Button } from "@kinetic-ui/buttons"'],
  id: 'kinetic-button',
  metadata: { nestable: false },
};
