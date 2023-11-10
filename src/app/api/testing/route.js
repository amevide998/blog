import {NextResponse} from "next/server";
import prisma from "@/utils/connect";
import {getAuthSession} from "@/utils/auth";

// export const runtime = 'edge';

export const GET = async (req) => {
        return new NextResponse(
            JSON.stringify({message: "api is working"}, {
                status : 200
            })
        )
}
