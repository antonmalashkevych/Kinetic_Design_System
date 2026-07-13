// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-3266
// source=Dropdowns/Dropdown.tsx
// component=Dropdown
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Regular: 'regular',
  Hover: 'hover',
  Focus: 'focus',
  Selected: 'selected',
  Inactive: 'inactive',
  Disabled: 'disabled',
});
const label = instance.getBoolean('Label');
const open = instance.getBoolean('List');
export default {
  example: figma.code`<Dropdown ${label ? 'label="Label"' : ''} state="${state}" ${open ? 'open' : ''} />`,
  imports: ['import { Dropdown } from "@kinetic-ui/dropdowns"'],
  id: 'kinetic-dropdown',
  metadata: { nestable: false },
};
