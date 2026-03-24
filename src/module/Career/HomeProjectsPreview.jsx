import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Text, Button, MeshGradient } from '../../atoms';
import { data } from '../Projects/data';
import styles from './index.module.scss';

const HomeProjectsPreview = () => {
	const router = useRouter();

	const featured = useMemo(() => {
		return data.filter((item) => item.imgUrl).slice(0, 3);
	}, []);

	return (
		<Box id="projects" className={styles.projectsSection}>
			<Box direction="row" mDirection="row" className={styles.sectionHeader}>
				<Text bold header align="left">
					Featured Projects
				</Text>
				<Button className={styles.footerButton} variant="secondary" text="See all" onClick={() => router.push('/projects')} />
			</Box>
			<Box direction="row" mDirection="column" className={styles.projectsGrid}>
				{featured.map((project) => (
					<Box
						key={project.header}
						className={styles.projectCard}
						onClick={() => router.push('/projects')}
						tabIndex={0}
						role="button"
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								router.push('/projects');
							}
						}}
					>
						<img src={project.imgUrl} alt={project.header} className={styles.projectImage} />
						<Text className={styles.projectType}>{project.type || 'project'}</Text>
						<Text bold align="left">
							{project.header}
						</Text>
						<Text align="left" className={styles.projectSub}>
							{project.subDetail}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default HomeProjectsPreview;
