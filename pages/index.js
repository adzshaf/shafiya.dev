import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shafiya Adzhani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl">HEHE</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
        <p className="text-white">HUHU HAHAHAHA</p>
      </footer>
    </div>
  )
}
