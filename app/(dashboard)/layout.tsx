import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import Leftside from "../components/layout/leftside";
// import Topbar from "../components/layout/topbar";
import '../style/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxira-Admin dashboard",
  description: "admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="flex max-lg:flex-col">  
          <Leftside/>
          {/* <Topbar/> */}
         <div className="flex-1">{children}</div> 
          
          </div>
          </body>
    </html>
    </ClerkProvider>
  );
}
