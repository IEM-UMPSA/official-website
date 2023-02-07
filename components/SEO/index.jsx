import Head from "next/head";

const SEO = ({ pageTitle, pageDescription, pageKeywords }) => (
  <>
    <Head>
      <title>
        IEM-UMPSS || {pageTitle} 
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="og:title" property="og:title" content={pageTitle}></meta>
      <meta name="og:description" property="og:description" content={pageDescription}></meta>
      <meta name="author" content="Hovah Yii, IEM Web Dev Team" />
      <meta name="robots" content="index, follow" />

      <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;