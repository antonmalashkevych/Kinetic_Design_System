// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=16622-14792
// source=Accordions/Accordion.tsx
// component=Accordion
import figma from 'figma';
const instance = figma.selectedInstance;
const type = instance.getEnum('Type', { Section: 'section', 'List element': 'list' });
const open = instance.getEnum('Show content', { True: true, False: false });
const labels = instance.findLayers((n) => n.type === 'TEXT');
const title = labels && labels[0] && labels[0].type === 'TEXT' ? labels[0].textContent : 'Title';
export default {
  example:
    type === 'list'
      ? figma.code`<Accordion type="list" title="${title}" open={${open}} actions={<><button className="k-accordion__link">View</button></>}>Content</Accordion>`
      : figma.code`<Accordion type="section" title="${title}" open={${open}}>Content</Accordion>`,
  imports: ['import { Accordion } from "@kinetic-ui/accordions"'],
  id: 'kinetic-accordion',
  metadata: { nestable: false },
};
