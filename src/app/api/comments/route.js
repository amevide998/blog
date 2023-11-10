import {NextResponse} from "next/server";
import prisma from "@/utils/connect";
import {getAuthSession} from "@/utils/auth";

// export const runtime = 'edge';

export const GET = async (req) => {

    const {searchParams} = new URL(req.url);
    const postSlug = searchParams.get('postSlug');

    try{
        const comments = await prisma.comment.findMany(
            {
                where : {
                   ...(postSlug && {postSlug})
                },
                include : {
                    user : true
                }
            }
        )

        return new NextResponse(
            JSON.stringify(comments, {
                status : 200
            })
        )
    }catch (err){
        console.log("api/categories/get : ", err)
        return new NextResponse(
            JSON.stringify({
                message : `Internal Server Error`
            }, {
                status: 500
            })
        )
    }
}

export const POST = async (req) => {

    const session = await getAuthSession();

    if(!session){
        return new NextResponse(
            JSON.stringify({message: "not authenticated"}, {status: 401})
        )
    }

    try{
        const body = await req.json();
        const comments = await prisma.comment.create({
         data: {...body, userEmail: session.user.email}
        })

        return new NextResponse(
            JSON.stringify(comments, {
                status : 200
            })
        )
    }catch (err){
        console.log("api/categories/get : ", err)
        return new NextResponse(
            JSON.stringify({
                message : `Internal Server Error`
            }, {
                status: 500
            })
        )
    }
}