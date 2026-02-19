import { Blocks, Globe, Layers, Moon, Paintbrush, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <HomeContent />;
}

function HomeContent() {
	const t = useTranslations("home");

	const features = [
		{
			key: "nextjs",
			icon: <Rocket className="h-8 w-8 text-primary" />,
		},
		{
			key: "tailwind",
			icon: <Paintbrush className="h-8 w-8 text-primary" />,
		},
		{
			key: "shadcn",
			icon: <Blocks className="h-8 w-8 text-primary" />,
		},
		{
			key: "i18n",
			icon: <Globe className="h-8 w-8 text-primary" />,
		},
		{
			key: "biome",
			icon: <Layers className="h-8 w-8 text-primary" />,
		},
		{
			key: "darkMode",
			icon: <Moon className="h-8 w-8 text-primary" />,
		},
	] as const;

	return (
		<div className="container mx-auto max-w-5xl px-4 py-16">
			{/* Hero */}
			<section className="flex flex-col items-center gap-6 text-center">
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t("title")}</h1>
				<p className="max-w-2xl text-lg text-muted-foreground">{t("subtitle")}</p>
				<div className="flex gap-4">
					<Button asChild size="lg">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer">
							{t("getStarted")}
						</a>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/about">{t("learnMore")}</Link>
					</Button>
				</div>
			</section>

			{/* Features */}
			<section className="mt-24">
				<h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
					{t("features.title")}
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map(({ key, icon }) => (
						<Card key={key} className="transition-shadow hover:shadow-lg">
							<CardHeader>
								<div className="mb-2">{icon}</div>
								<CardTitle>{t(`features.${key}.title`)}</CardTitle>
								<CardDescription>{t(`features.${key}.description`)}</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
