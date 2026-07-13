// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16627-27955
// source=Panels/Panel.tsx
// component=Panel
import figma from 'figma';
const instance = figma.selectedInstance;
const tab = instance.getEnum('Tab', { False: 'none', Rules: 'rules', Segments: 'segments', Projects: 'projects' });
export default {
  example: figma.code`<Panel title="Flo" onClose={() => {}} tabs={<Tabs active="${tab}" />}>
  {/* ${tab} content */}
</Panel>`,
  imports: ['import { Panel } from "@kinetic-ui/panels"'],
  id: 'kinetic-panel-flo',
  metadata: { nestable: false },
};
