// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16614-16177
// source=Breadcrumbs/Breadcrumbs.tsx
// component=Breadcrumbs
import figma from 'figma';

const instance = figma.selectedInstance;
// Full Path=False collapses the middle crumbs into an ellipsis.
const fullPath = instance.getEnum('Full Path', { True: true, False: false });
const collapsed = !fullPath;

export default {
  example: figma.code`<Breadcrumbs ${collapsed ? 'collapsed' : ''} items={[{ label: 'Home', href: '/' }, { label: 'Section', href: '/section' }, { label: 'Current' }]} />`,
  imports: ['import { Breadcrumbs } from "@kinetic-ui/breadcrumbs"'],
  id: 'kinetic-breadcrumbs',
  metadata: { nestable: false },
};
