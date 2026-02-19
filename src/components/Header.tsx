import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
	const t = useTranslations("header");

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
				<div className="flex items-center gap-6">
					<Link href="/" className="text-lg font-bold tracking-tight">
						Next.js Starter
					</Link>
					<Separator orientation="vertical" className="h-5" />
					<nav className="flex items-center gap-4 text-sm">
						<Link
							href="/"
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							{t("home")}
						</Link>
						<Link
							href="/about"
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							{t("about")}
						</Link>
						<Link
							href="/components"
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							{t("components")}
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-1">
					<LocaleSwitcher />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
