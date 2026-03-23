import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const CE = ({ name, time, logo, index }) => {
	return (
		<>
			<Box pad="xs" direction="row" mDirection="row">
				{logo && <img className={styles.listItemLogo} src={logo} alt={`${name} logo`} />}
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
