import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gooddeeds.com"),
  title: {
    default: "Good Deeds | Jack Deeds, CPA · Accounting & Property",
    template: "%s | Good Deeds",
  },
  description:
    "Practical accounting support and thoughtful property decisions with Jack Deeds, CPA. Explore outsourced accounting, furnished homes, and residential and commercial properties.",
  icons: { icon: "/gooddeedslogo.ico" },
  openGraph: { type: "website", siteName: "Good Deeds", locale: "en_US" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
