/** Shared field state (mirrors the Figma "State" variant across Inputs). */
export type FieldState =
  | 'regular'
  | 'hover'
  | 'focus'
  | 'activated'
  | 'disabled'
  | 'readonly'
  | 'loading'
  | 'validation'
  | 'error';
