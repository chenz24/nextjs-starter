import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ["", "/about", "/components"];

	const entries: MetadataRoute.Sitemap = [];

	for (const route of routes) {
		for (const locale of routing.locales) {
			entries.push({
				url: `${BASE_URL}/${locale}${route}`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: route === "" ? 1.0 : 0.8,
				alternates: {
					languages: Object.fromEntries(
						routing.locales.map((l) => [l, `${BASE_URL}/${l}${route}`]),
					),
				},
			});
		}
	}

	return entries;
}
