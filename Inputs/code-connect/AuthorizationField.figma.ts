// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16610-7492
// source=Inputs/AuthorizationField.tsx
// component=AuthorizationField
import figma from 'figma';

const instance = figma.selectedInstance;

const fieldType = instance.getEnum('Field type', {
  'Client ID': 'clientId',
  Username: 'username',
  Password: 'password',
  Dropdown: 'dropdown',
  'Phone number': 'phoneNumber',
  'Verification code': 'verificationCode',
  'Text input': 'textInput',
  'Client ID Dropdown': 'clientIdDropdown',
});
const selected = instance.getEnum('Selected', { True: true, False: false });

const labelH = instance.findText('Label');
const label = labelH && labelH.type === 'TEXT' ? labelH.textContent : '';

export default {
  example: figma.code`<AuthorizationField
  fieldType="${fieldType}"
  label="${label}"
  ${selected ? 'selected' : ''}
/>`,
  imports: ['import { AuthorizationField } from "@kinetic-ui/inputs"'],
  id: 'kinetic-authorization-field',
  metadata: { nestable: false },
};
