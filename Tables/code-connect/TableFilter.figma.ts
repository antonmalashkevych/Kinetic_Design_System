// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-12275
// source=Tables/TableFilter.tsx
// component=TableFilter
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Inactive: 'inactive',
  Hover: 'hover',
  Focus: 'focus',
  Activated: 'activated',
  Validation: 'validation',
});
const fieldType = instance.getEnum('Field type', {
  'Text input': 'text-input',
  Dropdown: 'dropdown',
  'Date field': 'date-field',
});
export default {
  example: figma.code`<TableFilter fieldType="${fieldType}" state="${state}" />`,
  imports: ['import { TableFilter } from "@kinetic-ui/tables"'],
  id: 'kinetic-table-filter',
  metadata: { nestable: false },
};
