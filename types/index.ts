import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
};

type SectionType = {
  _ref: string; // This is the _id of the referenced document
  _type: 'sectionInfo' | 'sectionCta'; // Specify the possible types
  // Add other fields specific to the referenced sections if needed
};

export type PageType = {
  _id: string,
  title: string,
  section1: SectionType,
  section2: SectionType
}