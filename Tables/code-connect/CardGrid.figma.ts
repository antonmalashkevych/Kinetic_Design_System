// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-13440
// source=Tables/CardGrid.tsx
// component=CardGrid
import figma from 'figma';
const instance = figma.selectedInstance;
const showContent = instance.getEnum('Show content', { True: true, False: false });
export default {
  example: figma.code`<CardGrid ${showContent ? 'showContent' : ''}>{rows}</CardGrid>`,
  imports: ['import { CardGrid } from "@kinetic-ui/tables"'],
  id: 'kinetic-card-grid',
  metadata: { nestable: false },
};
