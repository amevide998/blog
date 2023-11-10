import {NextResponse} from "next/server";
import prisma from "@/utils/connect";
import {getAuthSession} from "@/utils/auth";

// export const runtime = 'edge';

export const GET = async (req) => {

    const {searchParams} = new URL(req.url);
    const page = searchParams.get('page');
    const category = searchParams.get("category")

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
        const [posts, count] = await prisma.$transaction(
            [
                prisma.post.findMany(
                    {
                        take: POST_PER_PAGE,
                        skip: POST_PER_PAGE * (page - 1),
                        orderBy: {
                            createdAt: 'desc'
                        },
                        where: {
                            ...(category && {
                                catSlug: category
                            })
                        }
                    }
                ),
                prisma.post.count()
            ]

        );

        return new NextResponse(
            JSON.stringify({posts, count}, {
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



export const POST = async (req) => {

    const session = await getAuthSession();

    if(!session){
        return new NextResponse(
            JSON.stringify({message: "not authenticated"}, {status: 401})
        )
    }

    try{
        const body = await req.json();
        const post = await prisma.post.create({
            data: {...body, userEmail: session.user.email}
        })

        return new NextResponse(
            JSON.stringify(post, {
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