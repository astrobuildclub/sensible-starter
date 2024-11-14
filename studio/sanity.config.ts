import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from '@sanity/presentation'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './schemaTypes'

// Deconstruct .env file variables
const SANITY_STUDIO_PREVIEW_URL = (
	process.env.SANITY_STUDIO_PREVIEW_URL
	|| 'http://localhost:4321'
)
const SANITY_STUDIO_PROJECT_ID = (
  process.env.SANITY_STUDIO_PROJECT_ID 
  || ""
)
const SANITY_STUDIO_DATASET = (
  process.env.SANITY_STUDIO_DATASET 
  || 'production'
)


export default defineConfig({
  name: 'default',
  title: 'Sensible',

  projectId: '4gtmd681',
  dataset: 'production',

  plugins: [
    presentationTool(
      {
        previewUrl: `${SANITY_STUDIO_PREVIEW_URL}?preview=true`
      }
    ),
    structureTool(), 
    visionTool(), 
    media()],

  schema: {
    types: schemaTypes,
  },
})
