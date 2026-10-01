# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

### Resume-specific links

Use `?resume=1` (or `?resume=full-stack`) for Full Stack Developer,
`?resume=2` (or `?resume=ai`) for AI Software Engineer, and
`?resume=3` (or `?resume=flutter`) for Flutter Developer. These links personalize
the hero, summary, browser metadata, initial skills filter, footer, and generated
resume title, summary, skills order, and filename. Employment history stays
unchanged.

Without a supported `resume` value, the general portfolio and existing static
resume are used. Edit `src/data/jobProfiles.ts` to adjust the presets. Metadata is
updated in the browser; crawlers that do not execute JavaScript still see the
general metadata from `index.html`.
