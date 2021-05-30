import { Box, Navbar } from '../atoms';
import Intro from './Intro';
import styles from './index.module.scss';
import Curve from '../svg/curve.svg';

const App = () => {
	return (
		<Box className={styles.bg}>
			<Box pad="l">
				<Navbar title="Harshit Sinha" padH="40px">
					{/* <Box>Resume</Box> */}
					<Box>Snippets</Box>
					<Box onClick={() => window.open('https://battery941.wixsite.com/stockmaster')}>Blog</Box>
					<Box onClick={() => window.open('http://localhost:57078')}>StoryBoard</Box>
				</Navbar>
			</Box>
			<Intro></Intro>

			<Curve style={{ width: '100vw' }}></Curve>
		</Box>
	);
};

export default App;
