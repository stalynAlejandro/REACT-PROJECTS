import React, { useState } from 'react'
import { TouchableOpacity, Text } from 'react-native-web'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
interface IHeader {
  content: string,
  setContent: Function
}
const HeaderMenu = ({ content, setContent }: IHeader) => {
  return (
    <main className={styles.headerContainer}>
      <a href={'/'}><h2>SAAV</h2></a>
      <div className={styles.headerRight}>
        <TouchableOpacity onPress={() => setContent('about')}>
          <h2>About</h2>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => setContent('projects')}>
          <h2>Projects</h2>
        </TouchableOpacity>
      </div>
    </main >
  )
}

const HomeContent = () => {
  return (
    <main className={styles.contentContainer}>
      <h1>Stalyn</h1>
    </main>
  )
}

const AboutContent = () => {
  return (
    <main className={styles.contentContainer}>
      <h1>About</h1>
    </main>
  )
}


const ProjectsContent = () => {
  return (
    <main className={styles.contentContainer}>
      <h1>Projects</h1>
    </main>
  )
}


export default function Home() {
  const [content, setContent] = useState('home')

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderMenu content={content} setContent={setContent} />

      {(content === 'home') && <HomeContent />}
      {(content === 'about') && <AboutContent />}
      {(content === 'projects') && <ProjectsContent />}

    </div>
  )
}
