import { useEffect, useState } from 'react';
import { Box, Loader } from '../../atoms';
import styles from './index.module.scss';
import ProjectItem from './ProjectItem';
import { data } from './data';
import Tag from './../../components/Tag';
import { useRouter } from 'next/router';

const availableTags = ['All', 'Open Source', 'Showcase'];
const Projects = () => {
	console.log('data', data);
	const router = useRouter();
	const { tag } = router.query;
	const [selectedTag, setSelectedTag] = useState(null);
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

	if (!selectedTag) {
		return <Loader />;
	}
	return (
		<Box>
			<Tag className={styles.projectTag} onChangeTag={onChangeTag} data={availableTags} selectedTag={selectedTag} />

			<Box direction="row" className={styles.projectItemList} style={{ justifyContent: 'space-around' }}>
				{data
					.filter(({ type }) => {
						const tag = selectedTag.toLowerCase();
						if (tag === 'all') {
							return true;
						} else {
							return tag === type?.toLowerCase();
						}
					})
					.map((element) => (
						<ProjectItem {...element} />
					))}
			</Box>
		</Box>
	);
};

export default Projects;
