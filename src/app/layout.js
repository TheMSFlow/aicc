import { Inter, PT_Sans_Narrow } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const panton = localFont({
  variable: "--font-panton",
  display: "swap",
  src: [
    { path: "./fonts/PantonNarrow-Trial-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/PantonNarrow-Trial-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/PantonNarrow-Trial-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PantonNarrow-Trial-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/PantonNarrow-Trial-Black.woff2", weight: "900", style: "normal" },
  ],
});

const description =
  "Transform AI ambiguity into strategic advantage. 4-week executive program covering AI value, governance, security, and deployment.";

export const metadata = {
  metadataBase: new URL("https://aiclarityforchiefs.com"),
  title: "AI Clarity for Chiefs | Executive AI Leadership Program",
  description,
  openGraph: {
    title: "AI Clarity for Chiefs | Executive AI Leadership Program",
    description,
    type: "website",
    images: ["/images/og-image_aicc.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Clarity for Chiefs | Executive AI Leadership Program",
    description,
    images: ["/images/og-image_aicc.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ptSansNarrow.variable} ${panton.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
