// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16610-4098
// source=Inputs/PhoneInput.tsx
// component=PhoneInput
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Regular: 'regular',
  Disabled: 'disabled',
  Hover: 'hover',
  Focus: 'focus',
  Activated: 'activated',
  Validation: 'validation',
  Error: 'error',
});
const list = instance.getEnum('List', { True: true, False: false });
const helperShown = instance.getEnum('Helper Text', { True: true, False: false });

const labelH = instance.findText('Label');
const label = labelH && labelH.type === 'TEXT' ? labelH.textContent : '';
const helperH = instance.findText('Helper text');
const helper = helperH && helperH.type === 'TEXT' ? helperH.textContent : '';

export default {
  example: figma.code`<PhoneInput
  label="${label}"
  state="${state}"
  ${list ? 'list' : ''}
  ${helperShown && helper ? figma.code`helperText="${helper}"` : ''}
/>`,
  imports: ['import { PhoneInput } from "@kinetic-ui/inputs"'],
  id: 'kinetic-phone-input',
  metadata: { nestable: false },
};
