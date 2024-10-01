import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "src/app/_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "node_modules/uploadthing/server/index.cjs";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Generated by Roman",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <body>
        <TopNav />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
