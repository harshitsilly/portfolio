import { useEffect, useState } from 'react';
import { Box, Text, Badge } from '../../atoms';
import styles from './index.module.scss';
import useIsMobile from '../../utils/useIsMobile';

const BlogItemHeader = ({ header, imageUrl, date, time }) => {
	const isMobile = useIsMobile();
	useEffect(async () => {}, []);
	return (
		<Box direction="row" mDirection="row">
			<Badge url="https://lh3.googleusercontent.com/a-/AOh14GjrmAiuLXnp-zwzoHuJ0JFwNqwIq3FM4Qu7SMr1-w%3Ds96-c" />
			<Box direction="column" style={{ alignContent: 'start', paddingLeft: '20px', fontSize: '14px' }}>
				<Text bold>Harshit Sinha</Text>
				<Text style={{ opacity: 0.85 }}>{`${date} . ${time}`}</Text>
			</Box>
		</Box>
	);
};

export default BlogItemHeader;
