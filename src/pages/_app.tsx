/* // MyApp do RocketSeat Boilerplate

//////

const Boilerplate =`Em programação de computadores, código boilerplate ou boilerplate se refere a 
 seções de código que devem ser incluídas em muitos lugares com pouca ou nenhuma
 alteração. Ele é muitas vezes usado quando se refere a linguagens que são
 consideradas detalhadas, onde o programador deve escrever muito código para fazer
 tarefas mínimas. 
`
//////
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp */

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Seu IP</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Qual o meu IP? Este site responde e meostra seu IP V4"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
