import Head from 'next/head';
import Layout, { siteTitle } from '../components/_layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Layout>
    </>
  );
}
