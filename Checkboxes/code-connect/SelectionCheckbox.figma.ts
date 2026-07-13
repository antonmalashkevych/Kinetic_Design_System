// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6445
// source=Checkboxes/SelectionCheckbox.tsx
// component=SelectionCheckbox
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Inactive: 'inactive',
  Hover: 'hover',
  Focus: 'focus',
  Selected: 'selected',
  Disabled: 'disabled',
});
const list = instance.getEnum('List', { True: true, False: false });
const selected = state === 'selected';
const disabled = state === 'disabled';
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : '';

export default {
  example: figma.code`<SelectionCheckbox ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''} ${list ? 'list' : ''}>${label}</SelectionCheckbox>`,
  imports: ['import { SelectionCheckbox } from "@kinetic-ui/checkboxes"'],
  id: 'kinetic-selection-checkbox',
  metadata: { nestable: true },
};
