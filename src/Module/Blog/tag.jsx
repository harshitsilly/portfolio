import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';

const tag = ['water', 'ev'];

const Tag = ({ tag, selected, onChangeTag }) => {
	useEffect(async () => {}, []);
	return (
		<Box
			className={selected ? styles.tagSelected : null}
			onClick={() => {
				onChangeTag(tag);
			}}
		>
			{tag}
		</Box>
	);
};

export default Tag;
