// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-23253
// source=Inputs/ChatInput.tsx
// component=ChatInput
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Placeholder: 'placeholder',
  Typing: 'typing',
  Active: 'active',
});

export default {
  example: figma.code`<ChatInput state="${state}" />`,
  imports: ['import { ChatInput } from "@kinetic-ui/inputs"'],
  id: 'kinetic-chat-input',
  metadata: { nestable: false },
};
