// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-5382
// source=Dropdowns/Multiselect.tsx
// component=Multiselect
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Inactive: 'inactive',
  Hover: 'hover',
  Focus: 'focus',
  Selected: 'selected',
  Disabled: 'disabled',
});
const label = instance.getBoolean('Label');
const open = instance.getBoolean('List');
export default {
  example: figma.code`<Multiselect ${label ? 'label="Label"' : ''} state="${state}" ${open ? 'open' : ''} values={values} />`,
  imports: ['import { Multiselect } from "@kinetic-ui/dropdowns"'],
  id: 'kinetic-multiselect',
  metadata: { nestable: false },
};
