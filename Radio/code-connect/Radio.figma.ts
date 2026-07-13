// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-1568
// source=Radio/Radio.tsx
// component=Radio
import figma from 'figma';

const instance = figma.selectedInstance;

const checked = instance.getEnum('Selected', { True: true, False: false });
const disabled = instance.getEnum('State', { Regular: false, Hover: false, Focus: false, Disabled: true });
const showLabel = instance.getBoolean('Label');
const labelLayer = instance.findText('Text');
const label = labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : '';

export default {
  example: figma.code`<Radio
  ${checked ? 'checked' : ''}
  ${disabled ? 'disabled' : ''}
  ${showLabel ? 'showLabel' : 'showLabel={false}'}
  ${showLabel && label ? figma.code`label="${label}"` : ''}
/>`,
  imports: ['import { Radio } from "@kinetic-ui/radio"'],
  id: 'kinetic-radio',
  metadata: { nestable: true },
};
