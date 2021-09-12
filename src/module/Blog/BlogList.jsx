import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';
import BlogItem from './BlogItem';

const availableBLogs = [
	{
		tag: 'water',
		header: 'Why water will be the next oil?',
		imageUrl: 'https://static.wixstatic.com/media/1a2db263adbd45d4b3df37a3fd15c5a8.jpg/v1/fit/w_1384,h_777,al_c,q_80/file.webp',
		date: 'Jan 31',
		time: '3min',
	},
	{
		tag: 'misc',
		header: 'Why Investing in market will not earn you lifetime fortune',
		imageUrl: 'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/investment_660_010421085549.jpg',
		date: 'June 25',
		time: '4min',
	},
];

const Tag = ({ tag }) => {
	useEffect(async () => {}, []);
	if (tag.toLowerCase() === 'all') {
		return (
			<Box className={styles.blogList}>
				{availableBLogs.map((element) => (
					<BlogItem {...element} />
				))}
			</Box>
		);
	} else {
		return (
			<Box className={styles.blogList}>
				{availableBLogs
					.filter((element) => element.tag === tag)
					.map((element) => (
						<BlogItem {...element} />
					))}
			</Box>
		);
	}
};

export default Tag;
