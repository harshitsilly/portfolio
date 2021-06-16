import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const Skills = ({ name, index }) => {
	return (
		<>
			<Box pad="xs">
				<Text className={styles.listItemHeader} bold align="left">
					{name}
				</Text>
				<Box></Box>
			</Box>
		</>
	);
};

export default Skills;
