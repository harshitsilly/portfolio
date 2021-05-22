import Head from 'next/head'
import App from '../src/components/app'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Harshit Readme.md</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <App/>
      </main>

      <footer>
       
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
