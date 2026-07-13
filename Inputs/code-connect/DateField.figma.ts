// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16610-5856
// source=Inputs/DateField.tsx
// component=DateField
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('Type', { Date: 'date', Timeframe: 'timeframe' });
const state = instance.getEnum('State', {
  Regular: 'regular',
  Disabled: 'disabled',
  Dasibled: 'disabled', // Figma variant typo, mapped to disabled
  Focus: 'focus',
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
  example: figma.code`<DateField
  type="${type}"
  label="${label}"
  state="${state}"
  ${helperShown && helper ? figma.code`helperText="${helper}"` : ''}
/>`,
  imports: ['import { DateField } from "@kinetic-ui/inputs"'],
  id: 'kinetic-date-field',
  metadata: { nestable: false },
};
