// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-11978
// source=Tables/GridColumn.tsx
// component=GridColumn
import figma from 'figma';
const instance = figma.selectedInstance;
const labels = instance.findLayers((n) => n.type === 'TEXT');
const label = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : 'Column';
export default {
  example: figma.code`<GridColumn label="${label}" sortable filter />`,
  imports: ['import { GridColumn } from "@kinetic-ui/tables"'],
  id: 'kinetic-table-grid-column',
  metadata: { nestable: true },
};
