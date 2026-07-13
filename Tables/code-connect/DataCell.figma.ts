// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-12338
// source=Tables/DataCell.tsx
// component=DataCell
import figma from 'figma';
const instance = figma.selectedInstance;
const type = instance.getEnum('Type', {
  Text: 'text',
  Icon: 'icon',
  Priority: 'priority',
  Action: 'action',
  Checkbox: 'checkbox',
});
const even = instance.getEnum('Even/odd', { True: true, False: false });
const state = instance.getEnum('State', { Default: 'default', Selected: 'selected', Hover: 'hover' });
const pinned = instance.getEnum('Pinned', { True: true, False: false });
const density = instance.getEnum('Density', { Low: 'low', Medium: 'medium', High: 'high' });
export default {
  example: figma.code`<DataRow state="${state}" ${even ? 'even' : ''} density="${density}">
  <DataCell type="${type}" ${pinned ? 'pinned' : ''} value="Value" />
</DataRow>`,
  imports: ['import { DataRow, DataCell } from "@kinetic-ui/tables"'],
  id: 'kinetic-table-data-cell',
  metadata: { nestable: true },
};
