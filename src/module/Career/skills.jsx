import { Box, Label } from '../../atoms';
import styles from './index.module.scss';

const data = [
	'Javascript',
	'Typescript',
	'React',
	'Redux',
	'Cypress',
	'Jest/RTL',
	'Nodejs',
	'Python',
	'Electron',
	'GraphQl',
	'MongoDb',
	'Postgress',
	'ChromaDB',
	'Aws',
];
const Skills = ({ name, index }) => {
	return (
		<>
			<Box direction="row" mDirection="row" pad="xs">
				{data.map((skill) => (
					<Label m text={skill} />
				))}
			</Box>
		</>
	);
};

export default Skills;
