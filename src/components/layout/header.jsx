import { Box, Navbar, Theme, Button } from '../../atoms';
import { useRouter } from 'next/router';
import Intro from '../Intro';
import Curve from '../../svg/curve.svg';
import styles from './index.module.scss';

export default function Header({}) {
	const router = useRouter();
	const isHeroHeader = router.asPath === '/' ? true : false;
	return (
		<Box className={`app ${isHeroHeader ? styles.bg : null}`}>
			<Box pad="l">
				<Navbar title="Harshit Sinha" onTitleClick={() => !isHeroHeader && router.push('/')} padH="35px" align="center" bold>
					{/* <Box>Resume</Box> */}
					<Box onClick={() => router.push('projects')}>Projects</Box>
					<Box onClick={() => router.push('snippets')}>Snippets</Box>
					<Box onClick={() => window.open('https://battery941.wixsite.com/stockmaster')}>Blog</Box>
					{/* <Box onClick={() => router.push('snippets')}>StoryBoard</Box> */}

					<Theme navUtils />

					<Button
						onClick={() =>
							window.open(
								'https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL2IvcyFBaGI4T19VM1lGMUloQzFOU20xZWd2Nzh4clZaP2U9dFMzeUda/root/content'
							)
						}
						navUtils
						text="Resume"
					/>
				</Navbar>
			</Box>
			{isHeroHeader && (
				<>
					<Intro></Intro>
					<Curve style={{ width: '100vw', fill: 'var(--color-background)' }}></Curve>
				</>
			)}
		</Box>
	);
}
