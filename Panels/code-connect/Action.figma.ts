// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16628-30891
// source=Panels/Panel.tsx
// component=Panel
import figma from 'figma';
const instance = figma.selectedInstance;
const recEngine = instance.getBoolean('Rec Engine');
const recommendations = instance.getBoolean('Recommendations');
const specialProject = instance.getBoolean('Special Project');
export default {
  example: figma.code`<Panel title="Action" onClose={() => {}} footer={<Button variant="primary">Apply</Button>}>
  ${recEngine ? '<RecActionCard message="..." onSave={() => {}} onCancel={() => {}} />' : ''}
  ${recommendations ? '{/* recommendations list */}' : ''}
  ${specialProject ? '{/* special project */}' : ''}
</Panel>`,
  imports: ['import { Panel } from "@kinetic-ui/panels"'],
  id: 'kinetic-panel-action',
  metadata: { nestable: false },
};
