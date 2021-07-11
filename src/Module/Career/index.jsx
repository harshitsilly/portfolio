import { Box, Text, Icon } from '../../atoms';
import PE from './type';
import Skills from './skills';
import { data } from './data';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';

const Work = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Box pad="xxl" direction="row" className={styles.career}>
				<Box pad={isMobile ? '' : 'xxl'}>
					<Text bold header align="left">
						Career Highlights
						<Icon style={{ marginLeft: '20px' }} type="resize" onClick={() => {}} />
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
