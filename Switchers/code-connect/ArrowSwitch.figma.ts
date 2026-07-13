// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-5980
// source=Switchers/ArrowSwitch.tsx
// component=ArrowSwitch
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', { Small: 'small', Medium: 'medium', Large: 'large' });
const disabled = instance.getEnum('State', { Enabled: false, Focus: false, Hover: false, Disabled: true });

export default {
  example: figma.code`<ArrowSwitch direction="right" size="${size}" aria-label="Next" ${disabled ? 'disabled' : ''} />`,
  imports: ['import { ArrowSwitch } from "@kinetic-ui/switchers"'],
  id: 'kinetic-arrow-switch',
  metadata: { nestable: true },
};
