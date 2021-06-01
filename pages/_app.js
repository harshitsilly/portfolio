import Head from 'next/head';
import './css/index.scss';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Harshit Readme.md</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout pageProps>
				<Component {...pageProps}></Component>
			</Layout>
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
