import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import { setUrl } from '../../utils';
import styles from './index.module.scss';

const ProjectItem = ({ header, subDetail, imgUrl }) => {
	const [response, setResponse] = useState(null);
	useEffect(async () => {
		let response = await fetch('https://api.github.com/repos/imjsElectron/electron-differential-updater');
		response = await response.json();
		console.log(response);
		setResponse(response);
	}, []);
	return (
		<>
			<Box className={styles.card}>
				<Box
					style={{
						background: `url(${imgUrl})`,
						height: '250px',
						width: '380px',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></Box>
				<Box>
					<Text bold header>
						{header}
					</Text>

					<Text className={styles.subHeader}>{subDetail}</Text>
				</Box>
			</Box>
		</>
	);
};

export default ProjectItem;
