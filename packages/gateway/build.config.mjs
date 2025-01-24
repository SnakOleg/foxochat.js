import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  declaration: "compatible",
  entries: ["./src/index"],
  outDir: "./dist",
  rollup: {
    emitCJS: true,
  },
});
