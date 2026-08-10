import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sansFont.className}>
      <body className="bg-[#FAF8F5] antialiased">{children}</body>
    </html>
  );
}
export const metadata = {
  title: "Vinsou | Your Business Growth Partner",
  description: "Vinsou is your trusted growth partner for complete software development, custom CRMs, social media management, high-converting website design, and high-ROI ad campaign handling.",
  keywords: [
    "social media manager",
    "ad campaign management",
    "website development company",
    "custom CRM software",
    "IT solutions provider",
    "digital marketing agency",
    "full stack software development",
    "Vinsou"
  ],
  openGraph: {
    title: "Vinsou | Your Business Growth Partner",
    description: "Scale your business with Vinsou's expert IT solutions, custom software, CRMs, web development, and social media management.",
    url: "https://vinsou.com",
    siteName: "Vinsou",
    type: "website",
  },
};