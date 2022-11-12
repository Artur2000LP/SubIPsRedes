import AppIpInfo from "components/organism/AppIpInfo";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-auto">
      <Head>
        <title>IP INFO</title>
        <meta name="description" content="Proyecto de Redes" />
        <meta name="google-site-verification" content="03oTmK_RvtK-xs1VCqA7-EySl23tUJb2i7eoXx9tqzU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppIpInfo />
    </div>
  );
};

export default Home;
