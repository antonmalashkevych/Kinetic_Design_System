# Kinetic - Publishing & Code Connect

This guide covers two separate steps: publishing the Figma **library** (so other files can use the components/variables) and publishing **Code Connect** (so Dev Mode shows the real React code for each component).

Figma file key: `QWpZtLfVsUjbc99Lj3JJwJ`

---

## 1. Publish the Figma library

Library publishing is a manual action in the Figma app (it cannot be done over the API/plugin). It also requires the file to live in an Organization or Enterprise team with libraries enabled.

1. Open the Kinetic file in Figma.
2. Confirm the two variable collections are the only ones present: **Kinetic** and **Font (Kinetic)** (legacy collections were removed).
3. Top left: main menu, or the Assets panel -> **Libraries** icon.
4. Click **Publish** (or **Manage libraries -> Publish**).
5. In the publish dialog you will see the changed components, styles (the `kinetic/gradients/*` paint styles), and variables. Add a short changelog note (e.g. "Dark button/tab/table borders + modern status modals + gradient tokens").
6. Click **Publish**. Consuming files will get an update prompt.

Tip: publish variables and styles together with the components so tokens resolve in other files.

---

## 2. Publish Code Connect

Code Connect maps each Figma component to its React source so Dev Mode shows real Kinetic code. Everything in this folder is already wired up: 112 `*.figma.ts` templates and `figma.config.json`.

### Prerequisites
- Node 18+.
- A Figma account with Dev Mode / Code Connect access (Organization or Enterprise, or Dev seat).
- A Figma personal access token with the **Code Connect write** and **File content** scopes.

### One-time setup (run from this `kinetic-ui/` folder)

```bash
# from: Kinetic Design System/kinetic-ui
npm init -y                      # if there is no package.json yet
npm install --save-dev @figma/code-connect

# authenticate (create a token at figma.com -> Settings -> Security -> Personal access tokens)
export FIGMA_ACCESS_TOKEN="figd_your_token_here"
```

### Validate before publishing

```bash
npx figma connect parse          # parses every *.figma.ts, reports errors
```

This confirms each template resolves its component URL and props. All templates already pass local syntax checks.

### Publish

```bash
npx figma connect publish
```

This uploads the mappings for file `QWpZtLfVsUjbc99Lj3JJwJ`. Re-run it whenever templates change.

### Verify

1. Open the file in Figma, switch to **Dev Mode**.
2. Select any component instance (a Button, Tab, Modal, Card, Table cell, etc.).
3. The Inspect panel's Code section should show the Kinetic React snippet (e.g. `import { Button } from "@kinetic-ui/buttons"`).

### Unpublish (if needed)

```bash
npx figma connect unpublish
```

---

## Notes

- `figma.config.json` sets `parser: react`, the include globs (`<Folder>/code-connect/**/*.figma.ts`), and `importPaths` mapping each folder to its `@kinetic-ui/*` package name. If you rename folders or packages, update all three maps.
- Templates reference components by node URL (`node-id=...`) at the top of each file. If a component is re-created (new node id), update the URL in that template.
- Tokens live in `tokens/kinetic-tokens.css`. Consuming apps import that once at the root; components reference `var(--kinetic-*)` only, no hardcoded colors.
- The `kinetic/gradients/*` paint styles (aurora `bg-ana`/`bg-user`, `action-primary`, etc.) publish with the library; their CSS equivalents are the `--kinetic-gradient-*` custom properties.
