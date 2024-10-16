import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { PreLoader } from "@/components/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  // Set loading to false after 3 seconds and toggle body overflow
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    // Cleanup on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = loading ? "hidden" : "auto";
  }, [loading]);

  // Meta data for SEO
  const title = "Portfolyo | Yücel Gümüş";
  const description = "Merhaba ben Yücel Gümüş. Kişisel Portfolyo web siteme hoşgeldiniz";
  const avatar = "https://avatars.githubusercontent.com/u/117937365?s=48&v=4";
  const url = "https://portfolyo-lime.vercel.app/";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={avatar} />
        <meta property="og:image:width" content="612" />
        <meta property="og:image:height" content="612" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={url} />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} loading={loading} />
        <SpeedInsights mode="production"/>
        <Analytics mode="production" />
        {loading && <PreLoader />}
      </ThemeProvider>
    </>
  );
}
