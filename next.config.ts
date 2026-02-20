import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	reactCompiler: true,
	// Use standalone output for Docker builds (set STANDALONE=1)
	// Vercel uses its own optimized build pipeline
	...(process.env.STANDALONE === "1" && { output: "standalone" as const }),
};

export default withNextIntl(nextConfig);
