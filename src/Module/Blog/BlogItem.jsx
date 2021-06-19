import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';
import useIsMobile from '../../utils/useIsMobile';

const BlogItem = ({ header, imageUrl }) => {
	const isMobile = useIsMobile();
	useEffect(async () => {}, []);
	return (
		<Box direction="row" className={styles.blogItem}>
			<Box
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: 'cover',
				}}
			></Box>
			<Box pad={isMobile ? 'xs' : 'm'} style={{ justifyContent: 'center' }}>
				<Text header={!isMobile} bold>
					{header}
				</Text>
			</Box>
		</Box>
	);
};

export default BlogItem;
