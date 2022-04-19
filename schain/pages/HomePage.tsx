import React, { useState } from "react";
import Head from "next/head";
import {
  MainCover,
  HeaderMenu,
  Footer,
  TitleMain,
  SubHeaderMenu,
  SubMenuContent,
  PulserasContent,
  RelojesContent,
  CollaresContent,
  SombrerosContent,
  Vibes,
} from "../components";
import styles from "../styles/Home.module.css";

function HomePage() {
  const [selected, setSelected] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<string>("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link
          rel="preload"
          href="/fonts/Gruppo/Gruppo-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderMenu />

      <TitleMain title={"SCHAIN"} />

      <SubHeaderMenu
        selected={selected}
        setSelected={setSelected}
        setShowMenu={setShowMenu}
      />
      {/* <SubMenuContent showMenu={showMenu} setShowMenu={setShowMenu} /> */}

      <div className={styles.content}>
        <MainCover />

        {selected === "home" && <PulserasContent />}
        {selected === "pulseras" && <PulserasContent />}
        {selected === "relojes" && <RelojesContent />}
        {selected === "collares" && <CollaresContent />}
        {selected === "sombreros" && <SombrerosContent />}

        <Vibes />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

