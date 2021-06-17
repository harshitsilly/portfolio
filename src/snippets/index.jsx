import { useEffect, useState } from 'react';
import { Box, Text } from '../atoms';
import styles from './index.module.scss';

const tag = ['water', 'ev'];

const Projects = () => {
	useEffect(async () => {}, []);
	return (
		<>
			<Box pad="xl">
				<Box className={styles.tag} direction="row">
					<Box>All</Box>
					{tag.map((element) => (
						<Box>{element}</Box>
					))}
				</Box>
			</Box>
		</>
	);
};

export default Projects;
