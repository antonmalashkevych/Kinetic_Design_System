// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16633-14574
// source=Examples/StatusModal.tsx
// component=StatusModal
import figma from 'figma';
const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Success: 'success',
  Error: 'error',
  Regular: 'regular',
  Loading: 'loading',
  'File added': 'file-added',
});
export default {
  example:
    state === 'success'
      ? figma.code`<StatusModal status="success" title="File uploaded" message="Your file was uploaded to the workspace." onClose={() => {}} />`
      : state === 'error'
      ? figma.code`<StatusModal status="error" title="Upload error" message="Something went wrong. Try again." actions={[{ label: 'Close', variant: 'secondary' }, { label: 'Try Again', variant: 'primary' }]} onClose={() => {}} />`
      : figma.code`{/* upload dropzone state: use the Modal shell + upload field */}`,
  imports: ['import { StatusModal } from "@kinetic-ui/examples"'],
  id: 'kinetic-status-modal',
  metadata: { nestable: false },
};
