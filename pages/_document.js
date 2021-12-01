import Document, { Html, Head, Main, NextScript } from "next/document";

// This custom `Document` is for overwriting fonts on the entire page
// https://nextjs.org/docs/basic-features/font-optimization
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Insert Google fonts here: */}
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
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
