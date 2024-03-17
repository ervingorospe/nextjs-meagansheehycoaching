import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="google-site-verification" content="8dKP2h4UHoDKuGEiZ9Y93sKwhp5huTiQb0eYK9i9gFs" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument