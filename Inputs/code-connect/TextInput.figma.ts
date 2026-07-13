// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16607-3192
// source=Inputs/TextInput.tsx
// component=TextInput
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Regular: 'regular',
  Disabled: 'disabled',
  Hover: 'hover',
  Focus: 'focus',
  Validation: 'validation',
  Activated: 'activated',
  Error: 'error',
});
const helperShown = instance.getEnum('Helper text', { True: true, False: false });

const labelH = instance.findText('Label');
const label = labelH && labelH.type === 'TEXT' ? labelH.textContent : '';
const helperH = instance.findText('Helper text');
const helper = helperH && helperH.type === 'TEXT' ? helperH.textContent : '';

export default {
  example: figma.code`<TextInput
  label="${label}"
  state="${state}"
  ${helperShown && helper ? figma.code`helperText="${helper}"` : ''}
/>`,
  imports: ['import { TextInput } from "@kinetic-ui/inputs"'],
  id: 'kinetic-text-input',
  metadata: { nestable: false },
};
