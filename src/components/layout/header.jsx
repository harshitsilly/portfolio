import { Box, Button, Navbar, Theme } from '../../atoms';
import { useRouter } from 'next/router';
import Intro from '../../module/Intro/intro';
import Curve from '../../svg/curve.svg';
import styles from './index.module.scss';
import useMobile from '../../utils/useIsMobile';

export default function Header({}) {
	const router = useRouter();
	const isMobile = useMobile();
	const isHeroHeader = router.asPath === '/' ? true : false;

	const navigateToSection = (id) => {
		if (router.pathname === '/') {
			window.location.hash = id;
			return;
		}
		router.push(`/#${id}`);
	};

	return (
		<Box className={`${isHeroHeader ? styles.bg : null}`}>
			<Box className={!isMobile ? styles.topNavFixed : ''}>
				<Box pad="l" className={styles.topNavContainer}>
					<Navbar
						title="Harshit Sinha"
						onTitleClick={() => router.push('/')}
						padH="35px"
						align="center"
						bold
						badgeUrl="https://lh3.googleusercontent.com/a-/AOh14GjrmAiuLXnp-zwzoHuJ0JFwNqwIq3FM4Qu7SMr1-w%3Ds96-c"
					>
						<Box onClick={() => navigateToSection('experience')}>Experience</Box>
						<Box onClick={() => navigateToSection('projects')}>Projects</Box>
						<Box onClick={() => navigateToSection('contact')}>Contact</Box>
						<Box onClick={() => router.push('/blog')}>Blog</Box>
						<Button className={styles.resumeLink} onClick={() => window.open('/resume.pdf')}>
							Resume
						</Button>
						<Theme navUtils />
					</Navbar>
				</Box>
			</Box>
			{!isMobile && <div className={styles.navSpacer} />}
			{isHeroHeader && (
				<>
					<Intro></Intro>
					{/* <Curve style={{ width: '100%', fill: 'var(--color-footer)' }}></Curve> */}
				</>
			)}
		</Box>
	);
}
