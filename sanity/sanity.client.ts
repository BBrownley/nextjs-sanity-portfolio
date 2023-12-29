import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "3a34v82m",
  dataset: "production",
  apiVersion: "2023-12-28",
  useCdn: false,
};

const client = createClient(config);

export default client;