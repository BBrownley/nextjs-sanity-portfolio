export default {
  name: 'sectionCta',
  title: 'Section CTA',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 10
    },
    {
      name: 'ctaButtonText',
      title: 'Call to action button text',
      type: 'string'
    },
  ],
};