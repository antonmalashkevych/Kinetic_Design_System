// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=4319-16438
// source=Loaders/Skeleton.tsx
// component=Skeleton
import figma from 'figma';

const instance = figma.selectedInstance;
// Light dropped (dark theme only) -> maps to dark.
const tone = instance.getEnum('Background', { Orange: 'orange', Dark: 'dark', Light: 'dark' });

export default {
  example: figma.code`<Skeleton tone="${tone}" />`,
  imports: ['import { Skeleton } from "@kinetic-ui/loaders"'],
  id: 'kinetic-skeleton',
  metadata: { nestable: true },
};
