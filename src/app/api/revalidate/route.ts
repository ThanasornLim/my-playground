//https://<your-site.com>/api/revalidate?tag=collection&secret=<token>

//http://localhost:3000/api/revalidate?tag=collection&secret=f1dc9fab04321e9a1ae7794f894ca9ae

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get("secret");
    const tag = req.nextUrl.searchParams.get("tag");

    if (secret !== process.env.RE_VALIDATE_TOKEN) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
    console.log(tag);

    if (!tag) {
        return NextResponse.json(
            {
                message: "Missing tag param",
            },
            { status: 400 }
        );
    }

    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
