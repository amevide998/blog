import {NextResponse} from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req, {params}) => {

    const {slug} = params


    try{
        const posts = await prisma.post.update({
            where : {
                slug : slug
            },
            data: {
                views : {
                    increment : 1
                }
            },
            include: {
                user: true
            }
        })
        return new NextResponse(
            JSON.stringify(posts, {
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

