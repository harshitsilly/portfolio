import { Box, Text, Icon, MeshGradient } from '../../atoms';
import PE from './type';
import Skills from './skills';
import HomeProjectsPreview from './HomeProjectsPreview';
import { data } from './data';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const Work = () => {
	const isMobile = useIsMobile();
	const router = useRouter();
	return (
		<>
			<MeshGradient className={styles.meshLayer} />
			<Box id="experience" pad={isMobile ? 'l' : 'xxl'} className={styles.shell}>
				<Box direction="row" mDirection="column" className={styles.career}>
					<Box pad={isMobile ? 's' : 'l'} style={{ position: 'relative' }} className={styles.panel}>
						<Box direction="row" mDirection="row" className={styles.sectionHeader}>
							<Text bold header align="left">
								Career Highlights
							</Text>
							<Icon type="resize" onClick={() => router.push('/career')} />
						</Box>
						{data.map((element, index) => (
							<PE {...element} key={index} />
						))}
					</Box>
					<Box id="skills" pad={isMobile ? 's' : 'l'} className={styles.panel}>
						<Text bold header align="left">
							Skills
						</Text>
						<Skills />
					</Box>
				</Box>
				<HomeProjectsPreview />
			</Box>
		</>
	);
};

export default Work;
