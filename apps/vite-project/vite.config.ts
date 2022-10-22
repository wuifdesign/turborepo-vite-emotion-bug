import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BabelFileResult, transformAsync, TransformOptions } from "@babel/core";
import { PluginOption } from "vite";
import { createEmotionPlugin } from 'emotion-ts-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

const emotionPlugin = ["@emotion"];

function babelTransform(matches: RegExp[], options: TransformOptions): PluginOption {
  return {
    name: "vite-plugin-babel-transform",
    enforce: "pre",
    async transform(src, id) {
      if (matches.some((m) => m.test(id))) {
        const { code, map } = await transformAsyncOrThrow(src, {
          sourceFileName: id,
          sourceMaps: true,
          ...options,
        });

        assertDefined(code);

        return {
          code
        };
      }
    },
  };
}

async function transformAsyncOrThrow(
    code: string,
    opts?: TransformOptions
) {
  const result = await transformAsync(code, opts);

  if (result === null) {
    throw new Error("@babel/core.transformAsync() returned no code");
  }

  return result;
}

function assertDefined<T>(value: T | null | undefined): asserts value is T {
  if (value === undefined || value === null) {
    throw new Error("Expected value to be defined");
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: [
          './tsconfig.json',
          '../../packages/ui/tsconfig.json',
      ]
    }),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: [emotionPlugin],
      },
    }),
  ]
})
