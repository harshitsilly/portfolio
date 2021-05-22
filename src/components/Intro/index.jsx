import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import styles from './index.module.scss';

const Intro = () => {
	return (
		<>
			<Box pad="m">
				<Text header bold>
					Welcome
				</Text>
				<Box className={styles.header} direction="row" mdirection="col" pad="l">
					<Box width="40%">Test hello</Box>
					<Box width="60%">
						Creative, entrepreneurial and innovative developer who drove tremendous cost savings and became trusted employee for
						high-profile projects. A team player and an effective leader in different business environments. Interested in
						latest technological solutions and their role in transforming web.
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Intro;
