// url=https://www.figma.com/design/QWpZtLfVsUjbc99Lj3JJwJ/Kinetic-Platform---Atomic-Library-of-Elements?node-id=4539-17904
// source=Tooltips/ValidationTooltip.tsx
// component=ValidationTooltip
//
// Figma: Tolltips/Validation. Modern chip, no caret. `Short/Long` maps to multiline.
// Severity (warning/error) is an instance-level color override in Figma (not a variant),
// so it defaults to "warning" here — set severity="error" manually for format/error messages.
import figma from 'figma';

const instance = figma.selectedInstance;

const multiline = instance.getEnum('Short/Long', { True: true, False: false });
const textLayers = instance.findLayers((n) => n.type === 'TEXT');
const message =
  textLayers && textLayers[0] && textLayers[0].type === 'TEXT' ? textLayers[0].textContent : '';

export default {
  example: figma.code`<ValidationTooltip severity="warning" ${multiline ? 'multiline' : ''}>${message}</ValidationTooltip>`,
  imports: ['import { ValidationTooltip } from "@kinetic-ui/tooltips"'],
  id: 'kinetic-validation-tooltip',
  metadata: { nestable: true },
};
