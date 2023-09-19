'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashh = new URL('/pages/dashboard' , request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname === '/pages/registraar' || request.nextUrl.pathname === '/pages/alter') {
        {
            return NextResponse.redirect(urlLogin);
        }
    }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/') 
        {
            return NextResponse.redirect(urlDashh);
        }
    }


    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/alter', '/pages/registraar'] 
};


