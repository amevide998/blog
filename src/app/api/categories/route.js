import {NextResponse} from "next/server";
import prisma from "@/utils/connect";

// export const runtime = 'edge';

export const GET = async () => {
    try{
        const categories = await prisma.category.findMany();

        return new NextResponse(
            JSON.stringify(categories, {
                status : 200
            })
        )

    }catch (err){
        console.log("api/categories/get : ", err)
        return new NextResponse(
            JSON.stringify({
                message : "Internal Server Error"
            }, {
                status: 500
            })
        )
    }
}