import { useTranslations } from "next-intl";

export function Footer() {
	const t = useTranslations("footer");
	const year = new Date().getFullYear();

	return (
		<footer className="border-t py-6">
			<div className="container mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
				<p>
					{t("builtWith")} Next.js, Tailwind CSS, shadcn/ui {t("and")} ReUI
				</p>
				<p>
					&copy; {year} Next.js Starter. {t("allRightsReserved")}
				</p>
			</div>
		</footer>
	);
}
