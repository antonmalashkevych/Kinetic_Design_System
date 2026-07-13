// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-5847
// source=Switchers/ToggleSwitch.tsx
// component=ToggleSwitch
import figma from 'figma';

const instance = figma.selectedInstance;

const checked = instance.getEnum('Selected', { True: true, False: false });
const disabled = instance.getEnum('State', { Regular: false, Hover: false, Focus: false, Disabled: true });

export default {
  example: figma.code`<ToggleSwitch ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} />`,
  imports: ['import { ToggleSwitch } from "@kinetic-ui/switchers"'],
  id: 'kinetic-toggle-switch',
  metadata: { nestable: true },
};
