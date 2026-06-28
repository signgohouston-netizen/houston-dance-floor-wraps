import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "HDF Wraps",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f1",
    theme_color: "#bf9b46",
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
    ],
  };
}
