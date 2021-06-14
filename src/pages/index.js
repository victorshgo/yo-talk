import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

/* Components */
import VideoChat from "@/components/VideoChat";

/* Styles */
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yo! Inglês</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VideoChat />
      </main>
    </div>
  );
}
