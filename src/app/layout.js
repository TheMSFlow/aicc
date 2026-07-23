import { Inter, PT_Sans_Narrow } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { LocationProvider } from "@/context/LocationContext";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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

const title = "AI Clarity for Chiefs | Executive AI Leadership Program";
const ogImage = {
  url: "/images/og-image_aicc.jpg",
  width: 1200,
  height: 630,
  alt: "AI Clarity for Chiefs — Executive AI Leadership Program",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "AI Clarity for Chiefs",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#01067a",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ptSansNarrow.variable} ${panton.variable}`}
    >
      <body>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <LocationProvider>{children}</LocationProvider>
      </body>
    </html>
  );
}
