import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const CE = ({ name, time, index }) => {
	return (
		<>
			<Box pad="xs" direction="row" mDirection="row">
				<Text className={styles.listItemHeader} bold align="left">
					{name}
				</Text>
				<Text align="left" className={styles.listItemTime}>
					({time})
				</Text>
			</Box>
		</>
	);
};

export default CE;
