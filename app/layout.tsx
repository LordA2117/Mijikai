import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { plexMono, neueHaas } from "./fonts";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mijikai - URL Shortener",
	description: "The Shortest Path Is Always The Straight One",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} ${neueHaas.variable} ${plexMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
