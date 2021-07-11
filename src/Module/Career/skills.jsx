import { Box, Label } from '../../atoms';
import styles from './index.module.scss';

const data = ['Javascript', 'CSS', 'React', 'Cypress', 'Nodejs', 'Typescript', 'GraphQl'];
const Skills = ({ name, index }) => {
	return (
		<>
			<Box direction="row" mDirection="row" pad="xs">
				{data.map((skill) => (
					<Label className={styles.skill} text={skill} />
				))}
			</Box>
		</>
	);
};

export default Skills;
