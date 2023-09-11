# video no. 35

API ROUTES IN NEXT JS

     src/app/api/hello/route.js

        export async function GET(req) {
        return new Response("hello ,Next.js;");
         }

     src/app/api/user/route.js

                import { NextResponse } from "next/server";
            export async function GET(request) {
            return NextResponse.json({ name: "ankit", age: 55 }, { status: 200 });
            }

# video no. 36

GET API WITH NEXT.JS

              src/app/api/hello/route.js

            import { NextResponse } from "next/server";
            import { data } from "@/utils/db.js";

            export function GET(request, conntent) {
            const user = data.filter((item) => item.id == conntent.params.id);
            return NextResponse.json(
                user.length == 0
                ? { result: "no data found", success: false }
                : { result: user, success: true }
            );
            }

# video no. 38

VIDEO NO 38 ABOUT POST API

      src/api/user/route.js

    export async function POST(req) {
    const paylod = await req.json();
    console.log(paylod.name);
    return NextResponse.json("hello");
    }

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
