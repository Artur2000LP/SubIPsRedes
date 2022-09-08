import AppIpInfo from "components/organism/AppIpInfo";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-auto">
      <Head>
        <title>IP INFO</title>
        <meta name="description" content="Proyecto de Redes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppIpInfo/>
    </div>
  );
};

export default Home;
