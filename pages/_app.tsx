import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../src/layouts/Layout';
import { createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={createCache({ key: 'css' })}>
      <Head>
        <title>Flexy Eccommerce Dashboard</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={ createTheme(theme)}>
        {/* <CssBaseline /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
