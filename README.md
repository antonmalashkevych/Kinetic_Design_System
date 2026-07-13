# Kinetic UI — Code Connect scaffold

React + TypeScript implementation of the Kinetic Platform Figma library, styled
entirely with Kinetic design tokens (CSS custom properties) and wired for
**Figma Code Connect**. Built page-by-page — one folder per Figma page.

## Structure

```
kinetic-ui/
├── figma.config.json             # Code Connect config (React parser)
├── tokens/
│   └── kinetic-tokens.css         # Shared: every Kinetic + Font token as a CSS variable (Dark theme)
├── Buttons/                       # Buttons page
│   ├── *.tsx  buttons.css  index.ts
│   └── code-connect/*.figma.ts
└── Inputs/                        # Inputs page
    ├── FieldBase.tsx  types.ts  inputs.css  index.ts
    ├── TextInput.tsx  TextArea.tsx  CurrencyInput.tsx  DateField.tsx
    ├── SearchField.tsx  PhoneInput.tsx  AuthorizationField.tsx
    ├── GroupedInput.tsx  ChatInput.tsx
    └── code-connect/*.figma.ts
```

Each page shares `tokens/kinetic-tokens.css`. Every `--kinetic-*` variable maps 1:1
to a Figma variable in the **Kinetic** / **Font (Kinetic)** collections — the same
values the Figma MCP / Dev Mode emits.

## Buttons ↔ Figma

| Component | Figma component set | node-id |
|---|---|---|
| `Button` | Buttons/General | `16606-563` |
| `IconButton` | Buttons/Icon button | `16606-1518` |
| `TextButton` | Buttons/Text button | `16606-546` |
| `AdditionalIconButton` | Buttons/Icon button/Additional | `16607-688` |
| `OutlineButton` | Buttons/Outline | `16606-493` |
| `FilterButton` | AdvancedUserFilters | `16606-460` |
| `AnaButton` | [Review] Ana/Buttons | `16606-453` |

## Inputs ↔ Figma

| Component | Figma component set | node-id |
|---|---|---|
| `TextInput` | Inputs/Text input | `16607-3192` |
| `TextArea` | Inputs/Text area | `16607-2903` |
| `CurrencyInput` | Inputs/Currency Input | `16610-3185` |
| `DateField` | Inputs/Date field | `16610-5856` |
| `SearchField` | Inputs/Search field | `16610-5645` |
| `PhoneInput` | Inputs/Phone Input | `16610-4098` |
| `AuthorizationField` | Inputs/Authorization fields | `16610-7492` |
| `GroupedInput` | Inputs/Grouped Input | `16610-3058` |
| `ChatInput` | Inputs/Chat | `16622-23253` |

Numeric values (currency, phone, date, codes) use the `--kinetic-font-family-mono`
token (IBM Plex Mono, tabular numerals); labels/placeholders/helper text use the sans
token. National-flag colors in `PhoneInput` are intentionally kept literal (not tokens).

## Code Connect prerequisites

The `.figma.ts` templates use the MCP template approach. To publish:

1. Components must be **published to a team library** (Org/Enterprise plan).
2. Add `@figma/code-connect/figma-types` to `types` in `tsconfig.json`.
3. Connect via the Figma MCP tools / Code Connect CLI.

Property names in templates match the Figma variant names exactly (including the
"Helper Text" vs "Helper text" casing differences between sets); adjust if
`get_context_for_code_connect` returns cleaned names on publish.
