import svelte from "@astrojs/svelte"; // @ts-check

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  // Enable the Svelte renderer to support Svelte components.
  integrations: [svelte(), mdx()]
});