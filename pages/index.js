import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

import Head from 'next/head'
import Toggle from '../components/Toggl'
import Hello from '../components/Hello'
import Technologies from '../components/Technologies'
import Construction from '../components/Construction';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') { 
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
    
    <div className={styles.container}>
      <Head>
        <title>Hector Cardona - Front-End Web Developer</title>
        <meta name="description" content="Built with Next.js &amp; React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/*Pass the toggle functionality to the button*/}
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        {/* <Hello /> */}
        {/*<Technologies />*/}
        <Construction />
      </main>
    </div>
    </ThemeProvider>
  ) 
}
 