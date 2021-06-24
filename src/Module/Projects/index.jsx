import { useEffect, useState } from 'react';
import { Box, Text } from '../../atoms';
import styles from './index.module.scss';
import ProjectItem from './ProjectItem';
import { data } from './data';
import Tag from './../../components/Tag';
import { useRouter } from 'next/router';

const availableTags = ['Open Source', 'Upcoming', 'Sample'];
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
		<Box>
			<Tag className={styles.projectTag} onChangeTag={onChangeTag} data={availableTags} selectedTag={selectedTag} />

			<Box direction="row" className={styles.projectItemList} style={{ justifyContent: 'space-around' }}>
				{data.map((element) => (
					<ProjectItem {...element} />
				))}
			</Box>
		</Box>
	);
};

export default Projects;
