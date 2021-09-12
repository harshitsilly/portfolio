import { Box, Text } from '../../atoms';
import CE from './ListItem';
import styles from './index.module.scss';

const PE = ({ type, data }) => {
	return (
		<>
			<Box className={styles.type}>
				<Text bold header align="left">
					{type}
				</Text>
				{data.map((element, index) => (
					<CE {...element} index={index + 1} key={index} />
				))}
			</Box>
		</>
	);
};

export default PE;
