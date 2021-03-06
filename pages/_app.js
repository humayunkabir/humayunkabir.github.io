// import type { AppProps /*, AppContext */ } from 'next/app'
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
