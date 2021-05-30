import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const Intro = () => {
	return (
		<>
			<Box pad="m">
				<Text header bold>
					Welcome
				</Text>
				<Box direction="row" mdirection="col" pad="l">
					<Box width="40%"> hello</Box>
					<Box width="60%">
						Creative, entrepreneurial and innovative developer who drove tremendous cost savings and became trusted employee for
						high-profile projects. A team player and an effective leader in different business environments. Interested in
						latest technological solutions and their role in transforming web.
					</Box>
				</Box>
				{/* <iframe src="https://stackblitz.com/edit/error-boundarybox?embed=1&file=index.js&hideNavigation=1&view=editor"></iframe> */}
			</Box>
		</>
	);
};

export default Intro;
