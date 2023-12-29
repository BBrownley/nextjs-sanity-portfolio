import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-project-fcc-tutorial',

  projectId: '3a34v82m',
  dataset: 'production',

  plugins: [deskTool()],
  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
})
