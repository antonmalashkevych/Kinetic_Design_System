// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16610-3058
// source=Inputs/GroupedInput.tsx
// component=GroupedInput
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Regular: 'regular',
  Activated: 'activated',
  Disabled: 'disabled',
  Error: 'error',
  Focus: 'focus',
  Hover: 'hover',
  Validation: 'validation',
});

// Joined child field controls (resolved dynamically, rendered by their own templates).
const children = instance.findLayers((n) => n.type === 'INSTANCE');
let child0;
let child1;
if (children && children[0] && children[0].type === 'INSTANCE') {
  child0 = children[0].executeTemplate().example;
}
if (children && children[1] && children[1].type === 'INSTANCE') {
  child1 = children[1].executeTemplate().example;
}

export default {
  example: figma.code`<GroupedInput state="${state}">${child0}${child1}</GroupedInput>`,
  imports: ['import { GroupedInput } from "@kinetic-ui/inputs"'],
  id: 'kinetic-grouped-input',
  metadata: { nestable: false },
};
