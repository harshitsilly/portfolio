import Header from './header';
import Footer from './footer';
import { React } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '../../atoms';
import styles from './index.module.scss';

const socialLinks = [
	{ label: 'GitHub', icon: 'github', href: 'https://github.com/harshitsilly' },
	{ label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/harshit-sinha-a200833b4/' },
	{ label: 'Email', icon: 'mail', href: 'mailto:harshit886@outlook.com' },
	{ label: 'Twitter', icon: 'x', href: 'https://x.com/ImHs24' },
];

export default function Layout({ children, style, pageProps }) {
	const router = useRouter();
	const hideFloatingBar =
		['/wedding', '/career', '/projects', '/bucketList'].includes(router.route) || router.pathname.startsWith('/projects');

	return (
		<div id="app-scroll-root" style={style}>
			{!['/wedding', '/career'].includes(router.route) && <Header />}

			{!hideFloatingBar && (
				<nav className={styles.floatingSocialBar} aria-label="Social links">
					{socialLinks.map((item) => (
						<a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} title={item.label}>
							<Icon type={item.icon} className={styles.socialIcon} />
						</a>
					))}
				</nav>
			)}

			{children}
			{!['/bucketList', '/wedding', '/career'].includes(router.route) && <Footer />}
		</div>
	);
}
