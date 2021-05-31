import { Box, Navbar } from '../atoms';
import Intro from './Intro';
import styles from './index.module.scss';
import Curve from '../svg/curve.svg';
import Theme from './../atoms/Theme/index';

const App = () => {
	return (
		<Box className={styles.bg}>
			<Box pad="l">
				<Navbar title="Harshit Sinha" padH="35px" align="center" bold>
					{/* <Box>Resume</Box> */}
					<Box>Snippets</Box>
					<Box onClick={() => window.open('https://battery941.wixsite.com/stockmaster')}>Blog</Box>
					<Box onClick={() => window.open('http://localhost:57078')}>StoryBoard</Box>

					<Box navUtils>
						<Theme dark />
					</Box>
				</Navbar>
			</Box>
			<Intro></Intro>
			<Curve style={{ width: '100vw' }}></Curve>
		</Box>
	);
};

export default App;
