import Head from 'next/head';
import './css/index.scss';
import Layout from '../src/components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from './../src/atoms';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [appLoader, setAppLoader] = useState(false);

	useEffect(() => {
		router.events.on('routeChangeStart', () => setAppLoader(true));
		router.events.on('routeChangeComplete', () =>
			setTimeout(() => {
				setAppLoader(false);
			}, 800)
		);
		router.events.on('routeChangeError', () =>
			setTimeout(() => {
				setAppLoader(false);
			}, 1000)
		);
		return () => {
			router.events.off('routeChangeStart');
			router.events.off('routeChangeComplete');
			router.events.off('routeChangeError');
		};
	}, []);
	return (
		<>
			<Head>
				<title>Harshit Readme.md</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout pageProps style={appLoader ? { visibility: 'hidden' } : {}}>
				<Component {...pageProps}></Component>
			</Layout>
			{appLoader && <Loader />}
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
