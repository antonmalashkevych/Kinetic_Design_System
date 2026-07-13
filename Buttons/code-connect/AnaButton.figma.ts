// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16606-453
// source=Buttons/AnaButton.tsx
// component=AnaButton
//
// Figma: [Review] Ana/Buttons (legacy). Variants: State; text: Text.
import figma from 'figma';

const instance = figma.selectedInstance;

const label = instance.getString('Text');
const state = instance.getEnum('State', {
  Default: 'default',
  Active: 'active',
  Disabled: 'disabled',
});
const active = state === 'active';
const disabled = state === 'disabled';

export default {
  example: figma.code`<AnaButton ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}>${label}</AnaButton>`,
  imports: ['import { AnaButton } from "@kinetic-ui/buttons"'],
  id: 'kinetic-ana-button',
  metadata: { nestable: false },
};
