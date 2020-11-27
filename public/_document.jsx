import React from 'react';
import Document, { Html, Head, Main, NextScript, Title , Link, Meta ,DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <Link rel="apple-touch-icon" sizes="57x57" href="/favincons/apple-icon-57x57.png"/>
<Link rel="apple-touch-icon" sizes="60x60" href="/favincons/apple-icon-60x60.png"/>
<Link rel="apple-touch-icon" sizes="72x72" href="/favincons/apple-icon-72x72.png"/>
<Link rel="apple-touch-icon" sizes="76x76" href="/favincons/apple-icon-76x76.png"/>
<Link rel="apple-touch-icon" sizes="114x114" href="/favincons/apple-icon-114x114.png"/>
<Link rel="apple-touch-icon" sizes="120x120" href="/favincons/apple-icon-120x120.png"/>
<Link rel="apple-touch-icon" sizes="144x144" href="/favincons/apple-icon-144x144.png"/>
<Link rel="apple-touch-icon" sizes="152x152" href="/favincons/apple-icon-152x152.png"/>
<Link rel="apple-touch-icon" sizes="180x180" href="/favincons/apple-icon-180x180.png"/>
<Link rel="icon" type="image/png" sizes="192x192"  href="/favincons/android-icon-192x192.png"/>
<Link rel="icon" type="image/png" sizes="32x32" href="/favincons/favicon-32x32.png"/>
<Link rel="icon" type="image/png" sizes="96x96" href="/favincons/favicon-96x96.png"/>
<Link rel="icon" type="image/png" sizes="16x16" href="/favincons/favicon-16x16.png"/>
<Link rel="manifest" href="/favincons/manifest.json"/>
<Meta name="msapplication-TileColor" content="#ffffff"/>
<Meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<Meta name="theme-color" content="#ffffff"/>
   <title>Seu.IP</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;