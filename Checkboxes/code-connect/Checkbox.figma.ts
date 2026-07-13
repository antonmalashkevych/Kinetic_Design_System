// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6053
// source=Checkboxes/Checkbox.tsx
// component=Checkbox
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('Position', {
  Selected: 'checked',
  Inactive: 'unchecked',
  Indeterminate: 'indeterminate',
});
const disabled = instance.getEnum('State', {
  Regular: false,
  Hover: false,
  Focus: false,
  Disabled: true,
});
const showLabel = instance.getBoolean('Label');
const labelLayer = instance.findText('Text');
const label = labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : '';

export default {
  example: figma.code`<Checkbox
  state="${state}"
  ${showLabel ? 'showLabel' : 'showLabel={false}'}
  ${disabled ? 'disabled' : ''}
  ${showLabel && label ? figma.code`label="${label}"` : ''}
/>`,
  imports: ['import { Checkbox } from "@kinetic-ui/checkboxes"'],
  id: 'kinetic-checkbox',
  metadata: { nestable: true },
};
