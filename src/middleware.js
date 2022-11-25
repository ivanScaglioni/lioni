import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(req) {
    const jwt = req.cookies.get('authorization')

    if (jwt === undefined) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    try {
        const encoder = new TextEncoder();
        const data = await jwtVerify(jwt, encoder.encode(process.env.PRIVATE_KEY))
        return NextResponse.next();
    } catch (error) {
        console.log(error)
        return NextResponse.redirect(new URL('/login', req.url))
    }



}


export const config = {
    matcher: ['/admin/:path*']
}