import { Box, Text } from '../../atoms';
import PE from './type';
import Skills from './skills';
import { data } from './data';
import styles from './index.module.scss';
import useIsMobile from '../../utils/useIsMobile';

const Work = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Box pad="xxl">
				<Box pad={isMobile ? '' : 'xxl'}>
					<Text bold header align="left">
						Career Highlights
					</Text>
					{data.map((element, index) => (
						<PE {...element} key={index} />
					))}
				</Box>

				<Box pad={isMobile ? '' : 'xxl'}>
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
