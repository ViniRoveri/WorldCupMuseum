import Header from "@/components/layout/Header";
import "./globals.css"
import 'remixicon/fonts/remixicon.css'
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "World Cup Museum"
}

const body = `bg-radial from-vr-white to-vr-lightYellow h-screen`
const main = `h-full w-full`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={body}>
        <NextTopLoader color="var(--color-vr-darkYellow)" height={2} showSpinner={false}/>

        <Header/>
        
        <main className={main}>
          {children}
        </main>
      </body>
    </html>
  )
}
