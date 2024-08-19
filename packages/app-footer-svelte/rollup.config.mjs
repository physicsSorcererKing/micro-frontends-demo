import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import terser from "@rollup/plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/psk-app-footer-svelte.js",
  output: {
    sourcemap: true,
    format: "system",
    name: null, // ensure anonymous System.register
    file: "dist/psk-app-footer-svelte.js",
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,

      emitCss: false,
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // Watch the `dist` directory and refresh the
    // browser on changes when not in production
    !production && livereload("dist"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

// function start() {
//   let started = false;
//
//   return {
//     writeBundle() {
//       if (!started) {
//         started = true;
//
//         require("child_process").spawn(
//           "pnpm",
//           ["run", "serve", "--", "--dev"],
//           {
//             stdio: ["ignore", "inherit", "inherit"],
//             shell: true,
//           }
//         );
//       }
//     },
//   };
// }
