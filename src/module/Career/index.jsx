import { Box, Text, Icon } from '../../atoms';
import PE from './type';
import Skills from './skills';
import { data } from './data';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const Work = () => {
	const isMobile = useIsMobile();
	const router = useRouter();
	return (
		<>
			<Box pad="xxl" direction="row" className={styles.career}>
				<Box pad={isMobile ? '' : 'xxl'} style={{ position: 'relative' }}>
					<Text bold header align="left">
						Career Highlights
						<Icon style={{ right: '0px', position: 'absolute' }} type="resize" onClick={() => router.push('/career')} />
					</Text>
					{data.map((element, index) => (
						<PE {...element} key={index} />
					))}
				</Box>
				<Box pad={isMobile ? '' : 'xxl'} style={isMobile ? {} : { maxWidth: '400px' }}>
					<Text bold header align="left">
						Skills
					</Text>
					<Skills />
				</Box>
			</Box>
		</>
	);
};

export default Work;
