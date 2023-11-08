import {NextResponse} from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req) => {

    const {searchParam} = new URL(req.url);

    const page = searchParam.page;

    if(!page){
        return new NextResponse(
            JSON.stringify({
                message : "Page not found"
            }, {
                status: 404
            })
        )
    }

    const POST_PER_PAGE = 2

    try{
        const categories = await prisma.category.findMany(
            {
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (page - 1),
                orderBy: {
                    createdAt: "desc"
                }
            }
        );

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