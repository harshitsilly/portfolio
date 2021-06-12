import { Box, Text } from '../../atoms';
import PE from './type';
import { data } from './data';
import styles from './index.module.scss';

const Work = () => {
	return (
		<>
			<Box pad="xxl" direction="row">
				<Box className={styles.career} pad="l" style={{ width: '60%' }}>
					<Text bold header align="left">
						Career Highlights
					</Text>
					{data.map((element, index) => (
						<PE {...element} key={index} />
					))}
				</Box>

				<Box pad="l" style={{ width: '30%' }}>
					<Text bold header>
						Skills
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default Work;
