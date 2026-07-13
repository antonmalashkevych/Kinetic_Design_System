// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16632-8689
// source=Examples/FloGrid.tsx
// component=FloGrid
import figma from 'figma';
export default {
  example: figma.code`<FloGrid
  title="RMA Flo"
  columns={[
    { key: 'priority', label: 'Priority', type: 'priority', filter: true },
    { key: 'date', label: 'Date', numeric: true, sortable: true },
    { key: 'rule', label: 'Worklist Rule Name', filter: true },
    { key: 'assignee', label: 'Assignee', filter: true },
    { key: 'active', label: 'Active', type: 'toggle' },
    { key: 'delete', label: 'Delete', type: 'action' },
  ]}
  rows={rows}
  onSort={(k) => {}}
  onRowSelect={(i) => {}}
/>`,
  imports: ['import { FloGrid } from "@kinetic-ui/examples"'],
  id: 'kinetic-example-flo-grid',
  metadata: { nestable: false },
};
