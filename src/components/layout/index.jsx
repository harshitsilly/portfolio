import Header from './header';
import Footer from './footer';
import { React } from 'react';

export default function Layout({ children, style }) {
	return (
		<div style={style}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
