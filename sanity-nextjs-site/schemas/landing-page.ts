export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: 'section1',
      title: 'Section #1',
      type: 'reference',
      to: [{ type: 'sectionInfo' }, { type: 'sectionCta' }], // allow either type 
    },
    {
      name: 'section2',
      title: 'Section #2',
      type: 'reference',
      to: [{ type: 'sectionInfo' }, { type: 'sectionCta' }],
    },
    // Add other fields as needed
  ],
};