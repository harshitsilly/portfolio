import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const CE = ({ name, index }) => {
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

export default CE;
