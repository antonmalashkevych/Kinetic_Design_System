// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16606-460
// source=Buttons/FilterButton.tsx
// component=FilterButton
//
// Figma: AdvancedUserFilters. Variants: State; boolean: tag.
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Default: 'default',
  Active: 'active',
  'Selected filters': 'selected',
  Disabled: 'disabled',
});
const showTag = instance.getBoolean('tag');
const active = state === 'active';
const selected = state === 'selected';
const disabled = state === 'disabled';

const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const label =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT'
    ? textLayers[0].textContent
    : '';

export default {
  example: figma.code`<FilterButton
  ${active ? 'active' : ''}
  ${selected ? 'selected' : ''}
  ${showTag ? 'showTag' : ''}
  ${disabled ? 'disabled' : ''}
>${label}</FilterButton>`,
  imports: ['import { FilterButton } from "@kinetic-ui/buttons"'],
  id: 'kinetic-filter-button',
  metadata: { nestable: false },
};
