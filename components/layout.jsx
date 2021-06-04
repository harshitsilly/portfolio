import { Box, Navbar, Theme } from '../src/atoms';
import { useRouter } from 'next/router';
import Intro from '../src/components/Intro';
import styles from './index.module.scss';
import Curve from '../src/svg/curve.svg';

export default function Layout({ children, pageProps }) {
	const router = useRouter();
	const isHeroHeader = router.asPath === '/' ? true : false;
	return (
		<>
			<Box className={`app ${isHeroHeader ? styles.bg : null}`}>
				<Box pad="l">
					<Navbar title="Harshit Sinha" onTitleClick={() => !isHeroHeader && router.push('/')} padH="35px" align="center" bold>
						{/* <Box>Resume</Box> */}
						<Box onClick={() => router.push('snippets')}>Snippets</Box>
						<Box onClick={() => window.open('https://battery941.wixsite.com/stockmaster')}>Blog</Box>
						<Box onClick={() => router.push('snippets')}>StoryBoard</Box>

						<Box navUtils>
							<Theme dark />
						</Box>
					</Navbar>
				</Box>
				{isHeroHeader && (
					<>
						<Intro></Intro>
						<Curve style={{ width: '100vw', fill: 'var(--color-background)' }}></Curve>
					</>
				)}
			</Box>
			{children}
		</>
	);
}
