import Header from './header';
import Footer from './footer';
import { React } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children, style, pageProps }) {
	const router = useRouter();
	return (
		<div style={style}>
			<Header />
			{children}
			{router.route !== '/bucketList' && <Footer />}
		</div>
	);
}
