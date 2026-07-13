// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16621-8192
// source=Notifications/Notification.tsx
// component=Notification
import figma from 'figma';
const instance = figma.selectedInstance;
const type = instance.getEnum('Type', {
  Info: 'info',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
});
const multiline = instance.getEnum('Multiline', { True: true, False: false });
const buttons = instance.getEnum('Buttons', { '-': 0, '2': 2, '3': 3 });
const actions =
  buttons === 3
    ? '[{label:"Confirm"},{label:"Later",variant:"secondary"},{label:"Dismiss",variant:"secondary"}]'
    : buttons === 2
    ? '[{label:"Confirm"},{label:"Dismiss",variant:"secondary"}]'
    : '[]';
export default {
  example: figma.code`<Notification type="${type}" ${multiline ? 'multiline' : ''} title="Title" message="Message" actions={${actions}} onClose={() => {}} />`,
  imports: ['import { Notification } from "@kinetic-ui/notifications"'],
  id: 'kinetic-notification',
  metadata: { nestable: false },
};
