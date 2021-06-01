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

     
    </div>
  )
}
