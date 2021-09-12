import { Box, Navbar, Theme, Button, Icon, Label } from '../../atoms';
import { useRouter } from 'next/router';
import Intro from '../../module/Intro/intro';
import Curve from '../../svg/curve.svg';
import styles from './index.module.scss';
import useMobile from '../../utils/useIsMobile';

export default function Header({}) {
	const router = useRouter();
	const isMobile = useMobile();
	const isHeroHeader = router.asPath === '/' ? true : false;
	return (
		<Box className={`app ${isHeroHeader ? styles.bg : null}`}>
			<Box pad="l">
				{isHeroHeader && (
					<Label
						type="success"
						text="Site Under Construction"
						style={{ position: 'absolute', transform: 'rotate(-40deg)', top: '45px', left: '-10px', zIndex: '100' }}
					/>
				)}

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
					{/* <Box onClick={() => router.push('/snippets')}>Snippets</Box> */}
					<Box onClick={() => router.push('/blog')}>Blog</Box>
					{/* <Box onClick={() => router.push('snippets')}>StoryBoard</Box> */}

					<Theme navUtils dark />

					<Icon type="github" onClick={() => window.open('https://github.com/harshitsilly')} navUtils />
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
