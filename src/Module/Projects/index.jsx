import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const Projects = () => {
	const [response, setResponse] = useState(null);
	useEffect(async () => {
		let response = await fetch('https://api.github.com/repos/imjsElectron/electron-differential-updater');
		response = await response.json();
		console.log(response);
		setResponse(response);
	}, []);
	return (
		<>
			<Box pad="xl">
				<Box className={styles.card}>
					<Text bold>Electron Differential Updater</Text>

					<Text>
						Differential updater for Mac. Minimise your update download by upto 95%. Preserve code signature and integrity.
					</Text>
					<Box direction="row" mDirection="row">
						<a href="https://npmjs.org/package/@imjs/electron-differential-updater" target="_blank">
							<img src="https://img.shields.io/npm/dm/@imjs/electron-differential-updater.svg" />
						</a>
						<a href="https://github.com/imjsElectron/electron-differential-updater" target="_blank"></a>
						{response?.stargazers_count}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Projects;
