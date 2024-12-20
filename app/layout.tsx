import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Inclusive Culture | Mosaic Consulting",
  description:
    "Mosaic provides cultural agility training through customized roadmaps—including team workshops, individual coaching, and team and leadership development crash courses.",
  openGraph: {
    title: "Build Inclusive Culture | Mosaic Consulting",
    description:
      "Mosaic provides cultural agility training through customized roadmaps—including team workshops, individual coaching, and team and leadership development crash courses.",
    images: [
      {
        url: "https://www.mosaicconsultingservices.com/images/og-image.png",
        width: 1200,
        height: 628,
        alt: "Mosaic Consulting",
      },
    ],
    url: "https://www.mosaicconsultingservices.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mosaicconsulting",
    title: "Build Inclusive Culture | Mosaic Consulting",
    description:
      "Mosaic provides cultural agility training through customized roadmaps—including team workshops, individual coaching, and team and leadership development crash courses.",
    images: {
      url: "https://www.mosaicconsultingservices.com/images/og-image.png",
      alt: "Mosaic Consulting",
      width: 1200,
      height: 628,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    apple: "/images/apple-touch-icon.png",
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
