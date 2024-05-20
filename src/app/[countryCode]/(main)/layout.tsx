import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://massi-frontend.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  console.log("GOT HERE =-->", "PageLayout")
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
