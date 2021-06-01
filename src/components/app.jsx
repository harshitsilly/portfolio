import { Box, Navbar, Theme } from '../atoms';
import Intro from './Intro';
import styles from './index.module.scss';
import Curve from '../svg/curve.svg';
import Layout from '../../components/layout';

const App = () => {
	return (
		<Box className={styles.bg}>
			<Box pad="l">
				<Layout />
			</Box>
			<Intro></Intro>
			<Curve style={{ width: '100vw', fill: 'var(--color-background)' }}></Curve>
		</Box>
	);
};

export default App;
