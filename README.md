# create-bluzzi

A CLI for creating new project based on divers templates projects. Just run...
```bash
npm create bluzzi@latest
```

## API

You can also use `create-bluzzi` programmatically:

```ts
import { create } from "create-bluzzi";

await create("my-app-name", {
  name: "my-app-name",
  template: "default", // or "skeleton" or "skeletonlib"
  types: "checkjs", // or "typescript" or null;
  prettier: false,
  eslint: false,
  playwright: false,
  vitest: false
});
```