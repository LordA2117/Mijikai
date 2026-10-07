import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export default async function RedirectPage({ params, }: { params: Promise<{ slug: string }>; }) {
	const { slug } = await params;

	const targetLink = await prisma.link.findUnique({
		where: {
			output_id: slug,
		},
	});
	console.log("Link Query Complete");

	if (!targetLink) {
		notFound();
	}

	await prisma.link.update({
		where: {
			id: targetLink.id,
		},
		data: {
			clicks: {
				increment: 1,
			},
		},
	});

	console.log("Link Updated");

	redirect(targetLink.source_link);
}
