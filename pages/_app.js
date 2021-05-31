import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto py-16">
      <Head>
        <title>Portfolio | Humayun Kabir</title>
        <meta name="description" content="Portfolio of Humayun Kabir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
