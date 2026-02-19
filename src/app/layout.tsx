import { Geist, Geist_Mono, Noto_Sans_SC } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
	variable: "--font-noto-sans-sc",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
