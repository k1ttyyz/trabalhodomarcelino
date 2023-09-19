'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urldashboard = new URL('/pages/dashboard' , request.url)
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard'|| 
        request.nextUrl.pathname === '/pages/alter' || request.nextUrl.pathname === '/pages/registraar'
        )  {
            return NextResponse.redirect(urlLogin);
        }
    }
    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urldashboard);
        }
    }
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/alter', '/pages/registraar', ]
};

