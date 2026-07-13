// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-2953
// source=Dropdowns/DropdownListItem.tsx
// component=DropdownListItem
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Regular: 'regular',
  Hover: 'hover',
  Selected: 'selected',
  Focus: 'focus',
  Disabled: 'disabled',
});
const highlight = instance.getBoolean('Highlight');
const icon = instance.getBoolean('Icon');
const checkbox = instance.getBoolean('Checkbox');
const divider = instance.getBoolean('Divider');
const label = instance.getString('Text');
export default {
  example: figma.code`<DropdownListItem label="${label}" state="${state}" ${highlight ? 'highlight' : ''} ${divider ? 'divider' : ''} ${icon ? 'icon={<Icon />}' : ''} ${checkbox ? 'checkbox={<Checkbox />}' : ''} />`,
  imports: ['import { DropdownListItem } from "@kinetic-ui/dropdowns"'],
  id: 'kinetic-dropdown-list-item',
  metadata: { nestable: true },
};
