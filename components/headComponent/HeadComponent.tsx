import Head from 'next/head';

const DEFAULT_TITLE = 'Default Title';
const DEFAULT_LINK = 'https://example.com';

const HeadComponent = ({ data }: { data: { title: string; link: string } }) => {
   const { title = DEFAULT_TITLE, link = DEFAULT_LINK } = data;
   const modifiedTime = new Date().toISOString();

   return (
      <Head>
         <title>{title}</title>
         <meta name="description" content={title} />
         <link rel="canonical" href={link} />
         <meta property="og:locale" content="en_US" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={title} />
         <meta property="og:url" content={link} />
         <meta property="og:site_name" content={title} />
         <meta property="article:modified_time" content={modifiedTime} />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:label1" content="Est. reading time" />
         <meta name="twitter:data1" content="4 minutes" />
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
         <link rel="manifest" href="/site.webmanifest" />
         <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
   );
};

export default HeadComponent;
