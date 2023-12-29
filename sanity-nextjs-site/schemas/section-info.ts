export default {
  name: 'sectionInfo',
  title: 'Section Info',
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
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        }
      ]
    }
  ],
};