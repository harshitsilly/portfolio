import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';
import useIsMobile from '../../utils/useIsMobile';
import BlogItemHeader from './BlogItemHeader';

const BlogItem = ({ header, imageUrl, ...props }) => {
	const isMobile = useIsMobile();
	useEffect(async () => {}, []);
	return (
		<Box direction="row" className={styles.blogItem}>
			<Box
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></Box>
			<Box pad={isMobile ? 'xs' : 'm'} style={{ justifyContent: 'flex-start' }}>
				<BlogItemHeader {...props} />
				<Box style={isMobile ? { marginTop: '10px' } : { marginTop: '40px' }}>
					<Text header={!isMobile} bold align="left">
						{header}
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default BlogItem;
