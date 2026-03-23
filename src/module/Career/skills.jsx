import { Box, Label, Text } from '../../atoms';
import styles from './index.module.scss';

const skillGroups = [
	{
		title: 'Frontend',
		skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'NextJs', 'Cypress', 'Jest / RTL', 'Electron'],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Python', 'MongoDB', 'GraphQL', , 'Postgres', 'ChromaDB'],
	},
	{
		title: 'AI/Platform',
		skills: ['AWS', 'GCP', 'Cursor', 'Codex'],
	},
];

const Skills = () => {
	return (
		<>
			<Box className={styles.skillsRoot}>
				{skillGroups.map((group) => (
					<Box key={group.title} className={styles.skillsGroup} >
						<Text bold>{group.title}</Text>
						<Box direction="row" mDirection="row" className={styles.skillsChips}>
							{group.skills.map((skill) => (
								<Label key={skill} text={skill} />
							))}
						</Box>
					</Box>
				))}
			</Box>
		</>
	);
};

export default Skills;
