import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ekpljqvi",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});