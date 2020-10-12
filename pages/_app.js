
// App compoent is the top level component which will be common across all different pages.
// In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}