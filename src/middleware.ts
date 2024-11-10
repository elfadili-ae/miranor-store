import { OAuthStrategy, createClient } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
    const cookies = request.cookies;
    const response = NextResponse.next();

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