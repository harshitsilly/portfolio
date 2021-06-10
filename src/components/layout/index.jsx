import { memo } from 'React';
import Header from './header';
import Footer from './footer';
import { React } from 'react';

export default memo(function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
});
