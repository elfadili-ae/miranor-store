import { OAuthStrategy, createClient } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";
import { WixClientServer } from "./lib/WixClientServer";

export const middleware = async (request: NextRequest) => {
    const cookies = request.cookies;
    const response = NextResponse.next();
    const wixClient = WixClientServer();
    const { pathname } = request.nextUrl;

    if (pathname === "/successful-payment") {
        if (!request.nextUrl.searchParams.has("payment_intent")) {
            const redirectUrl = new URL('/', request.url);
            return NextResponse.redirect(redirectUrl);
        }
    }

    if ((await wixClient).auth.loggedIn()) {
        const redirectPathsLoggedIn = ['/login', '/register', '/email-verification'];

        if (redirectPathsLoggedIn.includes(pathname)) {
            const redirectUrl = new URL('/', request.url);
            return NextResponse.redirect(redirectUrl);
        }
    } else {
        const { pathname } = request.nextUrl;
        const redirectPathsNotLoggedIn = ['/checkout', '/profile', '/orders'];

        if (redirectPathsNotLoggedIn.includes(pathname)) {
            const redirectUrl = new URL('/', request.url);
            return NextResponse.redirect(redirectUrl);
        }
    }

    if (cookies.has("refreshToken")) {
        return;
    } else {
        const wixClient = createClient({
            auth: OAuthStrategy({
                clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
            }),
        });

        const tokens = await wixClient.auth.generateVisitorTokens();
        response.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            maxAge: 60 * 60 * 24,
        });
    }

    return response;
}