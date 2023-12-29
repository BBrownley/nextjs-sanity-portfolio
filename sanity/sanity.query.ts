import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}


export async function getPage() {
  return client.fetch(
    groq`*[_type == "landingPage"]{
      _id,
      title,
      section1,
      section2
    }`
  );
}

export async function getContentByRef(ref: string) {
  return client.fetch(`*[_id == '${ref}']`);
}