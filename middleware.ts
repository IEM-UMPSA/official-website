
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return request.cookies.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value,
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value,
						...options,
					});
				},
				remove(name: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value: "",
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value: "",
						...options,
					});
				},
			},
		}
	);

	await supabase.auth.getSession();

	return response;
}

// import { NextRequest, NextResponse } from "next/server"
// import { isValidPassword } from "@/lib/isValidPassword"

// export async function middleware(req: NextRequest) {
//   if ((await isAuthenticated(req)) === false) {
//     return new NextResponse("Unauthorized", {
//       status: 401,
//       headers: { "WWW-Authenticate": "Basic" },
//     })
//   }
// }

// async function isAuthenticated(req: NextRequest) {
//   const authHeader =
//     req.headers.get("authorization") || req.headers.get("Authorization")

//   if (authHeader == null) return false

//   const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
//     .toString()
//     .split(":")

//   return (
//     username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
//     (await isValidPassword(
//       password,
//       process.env.HASHED_ADMIN_PASSWORD as string
//     ))
//   )
// }

// export const config = {
//   matcher: "/admin/:path*",
// }




// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest, NextResponse } from "next/server";


// export async function middleware(req: NextRequest){
//   const res = NextResponse.next();

//   const supabase = createMiddlewareClient({req, res});

//   const {
//     data: {
//       session 
//     }
//   } = await supabase.auth.getSession();

//   console.log(session)

//   if(!session){
//     return  NextResponse.rewrite(new URL('/login', req.url))
//   }

//   return res
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico).)*'
//   ]
// }