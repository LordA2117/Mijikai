import { prisma } from "@/lib/prisma";
import { generateRandomId } from "@/utils/randomnumber";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		var unique_id = generateRandomId();
		const new_link = await prisma.link.create({
			data: {
				source_link: data.link,
				output_id: unique_id
			}
		});
		return NextResponse.json({
			success: true,
			url: `http://localhost:3000/${unique_id}`
		}, { status: 200 });
	} catch (error) {
		return NextResponse.json({
			success: false,
			error: error.message
		}, { status: 500 });
	}
}
