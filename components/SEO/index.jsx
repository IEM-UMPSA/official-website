import Head from "next/head";

const SEO = ({ pageTitle, pageDescription, pageKeywords, pageImage, pageURL }) => (
  <>
    <Head>
      <title>
        IEM-UMPSS | {pageTitle} 
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Hovah Yii, IEM Web Dev Team" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content="The website IEM-UMPSS is a platform hosted by the Institution of Engineers Malaysia - UMP Student Section. It provides a platform for university students to evaluate their proficiency and knowledge..." />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content="IEM-UMPSS" />
      <meta property="og:type" content="object" />
      <meta property="og:title" content={pageTitle}  />
      <meta property="og:url" content={pageURL} />
      <meta property="og:description" content={pageDescription} />

      <meta name="robots" content="index, follow" />

      <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;