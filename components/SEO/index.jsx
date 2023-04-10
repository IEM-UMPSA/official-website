import Head from "next/head";

const SEO = ({ pageTitle, pageDescription, pageKeywords, pageImage, pageURL, pageImageAlt }) => (
  <>
    <Head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>
        IEM-UMPSS | {pageTitle} 
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Hovah Yii, IEM Web Dev Team" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta property="og:title" content={pageTitle}  />
      <meta property="og:url" content={pageURL} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageImageAlt} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:site_name" content={`IEM-UMPSS | ${pageTitle}`} />
      <meta property="og:type" content="website" />

      <meta name="robots" content="index, follow" />

    </Head>
  </>
);

export default SEO;