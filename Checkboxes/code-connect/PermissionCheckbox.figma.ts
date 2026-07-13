// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16613-6122
// source=Checkboxes/PermissionCheckbox.tsx
// component=PermissionCheckbox
import figma from 'figma';

const instance = figma.selectedInstance;

const title = instance.getString('Text');
const subtext = instance.getString('Sub-text');
const selected = instance.getEnum('State', { Default: false, Hover: false, Selected: true });

export default {
  example: figma.code`<PermissionCheckbox
  title="${title}"
  subtext="${subtext}"
  ${selected ? 'selected' : ''}
/>`,
  imports: ['import { PermissionCheckbox } from "@kinetic-ui/checkboxes"'],
  id: 'kinetic-permission-checkbox',
  metadata: { nestable: true },
};
