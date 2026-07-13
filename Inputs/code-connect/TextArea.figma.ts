// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16607-2903
// source=Inputs/TextArea.tsx
// component=TextArea
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Regular: 'regular',
  Disabled: 'disabled',
  Focus: 'focus',
  'Read-only': 'readonly',
  Hover: 'hover',
  Activated: 'activated',
  Validation: 'validation',
  Error: 'error',
});
const helperShown = instance.getEnum('Helper text', { True: true, False: false });

const labelH = instance.findText('Label');
const label = labelH && labelH.type === 'TEXT' ? labelH.textContent : '';
const helperH = instance.findText('Helper text');
const helper = helperH && helperH.type === 'TEXT' ? helperH.textContent : '';

export default {
  example: figma.code`<TextArea
  label="${label}"
  state="${state}"
  ${helperShown && helper ? figma.code`helperText="${helper}"` : ''}
/>`,
  imports: ['import { TextArea } from "@kinetic-ui/inputs"'],
  id: 'kinetic-text-area',
  metadata: { nestable: false },
};
