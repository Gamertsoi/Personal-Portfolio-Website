import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteNav from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio for software and hardware projects.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-frame">
          <SiteNav />
          <main>{children}</main>
          <footer className="site-footer">
            <span>Made with curiosity.</span>
            <span>© {new Date().getFullYear()} Gamertsoi</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
