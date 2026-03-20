import { Box, Text, Label, Link, Icon } from '../../atoms';
import styles from './intro.module.scss';
import useIsMobile from '../../utils/useIsMobile';
import Vymo from '../Career/data/vymo.mdx';

const Intro = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Box pad={isMobile ? 's' : 'xl'}>
				<Box direction="row" mdirection="col" pad="l">
					<Box width="40%"></Box>
					<Box width="60%">
						10+ years of experience in building high performance scalable web applications. Frontend expert with full-stack
						capabilities.
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Intro;
