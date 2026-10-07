import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const data = await request.json();
	try {
		const url_query = await prisma.link.findUnique({
			where: {
				output_id: data.id,
			}
		});
		if (!url_query) {
			return NextResponse.json({ success: false, error: 'Link Not Found' }, { status: 404 });
		}

		return NextResponse.json({
			success: true,
			clicks: url_query.clicks
		}, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: error.message }, { status: 500 });
	}
}
