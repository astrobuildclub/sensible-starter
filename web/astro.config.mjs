// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import netlify from "@astrojs/netlify";

// Deconstruct .env file variables
const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_USE_CDN
} = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity(
    {
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: PUBLIC_SANITY_USE_CDN === "true" ,
    }
  )],

  output: "server",
  adapter: netlify()
});