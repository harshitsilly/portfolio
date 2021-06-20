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

					<Theme navUtils />

					<Button
						onClick={() =>
							window.open(
								'https://s3.amazonaws.com/attachments.angel.co/5953381-0c718448ea74156b6d3a24c9d90cf26b.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20210613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210613T201411Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a2cbf328dbd670f792d7c493871e7269a2ab31d9a50532bb4b19148269297db3'
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
