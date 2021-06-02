import Head from 'next/head';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio | Humayun Kabir</title>
        <meta name="description" content="Portfolio of Humayun Kabir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <div className="container mx-auto py-16">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
