import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";

export const neueHaas = localFont({
	src: "./fonts/NHaasGrotesk65Md.ttf",
});

export const plexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "400",
});

