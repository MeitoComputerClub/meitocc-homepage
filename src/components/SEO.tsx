import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export default function SEO({
  title,
  description,
  url,
  image = "https://meitocc.vercel.app/ogp.png",
}: SEOProps) {
  const siteName = "MeitoCC";

  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return (
    <Head>
      {/* SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      {/* OGP */}
      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:url" content={url} />

      <meta property="og:image" content={image} />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:locale" content="ja_JP" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* X / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
