import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';
import Tag from './tag';
import BlogList from './BlogList';

const availableTags = ['All', 'water', 'ev'];

const Projects = () => {
	const router = useRouter();
	const { tag } = router.query;
	const [selectedTag, setSelectedTag] = useState(availableTags[0]);
	useEffect(async () => {
		if (tag && tag[0]) {
			setSelectedTag(tag[0]);
		} else {
			setSelectedTag(availableTags[0]);
		}
	}, [tag]);
	const onChangeTag = (tag) => {
		setSelectedTag(tag);
		router.push(tag);
	};
	return (
		<div className={styles.blog}>
			<div className={styles.blogContainer}>
				<Box className={styles.tag} direction="row" mDirection="row">
					{availableTags.map((element) => (
						<Tag onChangeTag={onChangeTag} selected={selectedTag?.toLowerCase() === element.toLowerCase()} tag={element} />
					))}
				</Box>
				<BlogList tag={selectedTag} />
			</div>
		</div>
	);
};

export default Projects;
