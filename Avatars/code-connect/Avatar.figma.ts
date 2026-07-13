// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16607-3363
// source=Avatars/Avatar.tsx
// component=Avatar
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('Type', {
  Initials: 'initials',
  Image: 'image',
  Placeholder: 'placeholder',
});
const size = instance.getEnum('Size', { lg: 'lg', md: 'md', sm: 'sm' });

// initials come from the text layer when type = Initials
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const initials =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT'
    ? textLayers[0].textContent
    : '';

export default {
  example: figma.code`<Avatar
  type="${type}"
  size="${size}"
  ${type === 'initials' ? figma.code`initials="${initials}"` : ''}
  ${type === 'image' ? 'src={src}' : ''}
/>`,
  imports: ['import { Avatar } from "@kinetic-ui/avatars"'],
  id: 'kinetic-avatar',
  metadata: { nestable: true },
};
