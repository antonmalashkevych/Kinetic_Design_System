// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16610-3185
// source=Inputs/CurrencyInput.tsx
// component=CurrencyInput
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
const helperShown = instance.getEnum('Helper Text', { True: true, False: false });

const labelH = instance.findText('Label');
const label = labelH && labelH.type === 'TEXT' ? labelH.textContent : '';
const helperH = instance.findText('Helper text');
const helper = helperH && helperH.type === 'TEXT' ? helperH.textContent : '';

export default {
  example: figma.code`<CurrencyInput
  label="${label}"
  state="${state}"
  ${helperShown && helper ? figma.code`helperText="${helper}"` : ''}
/>`,
  imports: ['import { CurrencyInput } from "@kinetic-ui/inputs"'],
  id: 'kinetic-currency-input',
  metadata: { nestable: false },
};
