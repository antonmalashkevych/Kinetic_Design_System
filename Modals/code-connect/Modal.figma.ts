// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-14235
// source=Modals/Modal.tsx
// component=Modal
import figma from 'figma';
const instance = figma.selectedInstance;
const heading = instance.getBoolean('Heading');
const description = instance.getBoolean('Description');
const additional = instance.getBoolean('Additional text');
const multi = instance.getBoolean('Multi-buttons');
const showStepper = instance.getBoolean('Show Stepper');
const actions = multi
  ? '[{label:"Cancel",variant:"ghost"},{label:"Export",variant:"secondary"},{label:"Save View",variant:"secondary"},{label:"Apply Filters"}]'
  : '[{label:"Cancel",variant:"ghost"},{label:"Confirm"}]';
export default {
  example: figma.code`<Modal
  ${heading ? 'title="Title"' : ''}
  ${description ? 'description="Description text"' : ''}
  ${additional ? 'additionalText="This report includes filtered data."' : ''}
  ${showStepper ? 'stepper={<Stepper />}' : ''}
  actions={${actions}}
  onClose={() => {}}
/>`,
  imports: ['import { Modal } from "@kinetic-ui/modals"'],
  id: 'kinetic-modal',
  metadata: { nestable: false },
};
