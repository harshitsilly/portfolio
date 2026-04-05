import { Box, Label, Text } from '../../atoms';
import styles from './index.module.scss';

const skillGroups = [
	{
		title: 'Frontend',
		skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'NextJs', 'HTMlL', 'Cypress', 'Jest / RTL', 'Electron'],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Python', 'MongoDB', 'Postgres', 'GraphQL', 'ChromaDB'],
	},
	{
		title: 'AI/Platform',
		skills: ['Webpack', 'Vite', 'AWS', 'GCP', 'Cursor', 'Codex'],
	},
];

const Skills = () => {
	return (
		<>
			<Box className={styles.skillsRoot}>
				{skillGroups.map((group) => (
					<Box key={group.title} className={styles.skillsGroup}>
						<Text bold>{group.title}</Text>
						<Box direction="row" mDirection="row" className={styles.skillsChips}>
							{group.skills.map((skill) => (
								<Label key={skill} text={skill} type="secondary" />
							))}
						</Box>
					</Box>
				))}
			</Box>
		</>
	);
};

export default Skills;
