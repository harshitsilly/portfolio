import { Box, Navbar, Theme, Button } from '../../atoms';
import { useRouter } from 'next/router';
import Intro from '../../Module/Intro/intro';
import Curve from '../../svg/curve.svg';
import styles from './index.module.scss';

export default function Header({}) {
	const router = useRouter();
	const isHeroHeader = router.asPath === '/' ? true : false;
	return (
		<Box className={`app ${isHeroHeader ? styles.bg : null}`}>
			<Box pad="l">
				<Navbar
					title="Harshit Sinha"
					onTitleClick={() => !isHeroHeader && router.push('/')}
					padH="35px"
					align="center"
					bold
					badgeUrl="https://lh3.googleusercontent.com/a-/AOh14GjrmAiuLXnp-zwzoHuJ0JFwNqwIq3FM4Qu7SMr1-w%3Ds96-c"
				>
					{/* <Box>Resume</Box> */}
					<Box onClick={() => router.push('/projects')}>Projects</Box>
					<Box onClick={() => router.push('/snippets')}>Snippets</Box>
					<Box onClick={() => router.push('/blog')}>Blog</Box>
					{/* <Box onClick={() => router.push('snippets')}>StoryBoard</Box> */}

					<Theme navUtils dark />

					<Button onClick={() => window.open('/resume.pdf')} navUtils text="Resume" />
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
