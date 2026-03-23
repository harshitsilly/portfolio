import Head from 'next/head';
import './css/index.scss';
import Layout from '../src/components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader, CommandPalette } from './../src/atoms';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [appLoader, setAppLoader] = useState(false);
	const [isCommandOpen, setIsCommandOpen] = useState(false);

	useEffect(() => {
		router.events.on('routeChangeStart', () => setAppLoader(true));
		router.events.on('routeChangeComplete', () =>
			setTimeout(() => {
				setAppLoader(false);
				setIsCommandOpen(false);
			}, 500)
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

	useEffect(() => {
		const onKeyDown = (event) => {
			const key = event.key?.toLowerCase();
			if ((event.metaKey || event.ctrlKey) && key === 'k') {
				event.preventDefault();
				setIsCommandOpen((prev) => !prev);
			}
			if (key === 'escape') {
				setIsCommandOpen(false);
			}
		};

		const onOpenCommand = () => setIsCommandOpen(true);
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('open-command-palette', onOpenCommand);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('open-command-palette', onOpenCommand);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Harshit Readme.md</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout pageProps style={appLoader ? { visibility: 'hidden' } : { height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
				<Component {...pageProps}></Component>
			</Layout>

			<CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
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
