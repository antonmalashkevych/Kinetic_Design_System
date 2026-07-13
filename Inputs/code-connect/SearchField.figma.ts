// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16610-5645
// source=Inputs/SearchField.tsx
// component=SearchField
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Regular: 'regular',
  Disabled: 'disabled',
  Focus: 'focus',
  Hover: 'hover',
  Activated: 'activated',
  Loading: 'loading',
});
const autoComplete = instance.getEnum('Auto-complete', { True: true, False: false });
const noResults = instance.getEnum('No results', { True: true, False: false });

const labelH = instance.findText('Label');
const label = labelH && labelH.type === 'TEXT' ? labelH.textContent : '';

export default {
  example: figma.code`<SearchField
  label="${label}"
  state="${state}"
  ${noResults ? 'noResults' : ''}
  ${autoComplete ? 'items={items}' : ''}
/>`,
  imports: ['import { SearchField } from "@kinetic-ui/inputs"'],
  id: 'kinetic-search-field',
  metadata: { nestable: false },
};
