import type { AppProps } from 'next/app'
import '../src/styles/index.css';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App;