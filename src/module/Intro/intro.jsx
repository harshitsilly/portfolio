import { Box, Text } from '../../atoms';
import Avtar from '../../components/Avtar';
import styles from './intro.module.scss';
import useIsMobile from '../../utils/useIsMobile';

const Intro = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Box pad={isMobile ? 's' : 'xl'}>
				<Box direction="row" mdirection="col" pad="l">
					<Box width="40%">
						<Avtar src="https://www.joshwcomeau.com/_next/static/media/me-light-705eebe4935835b21ad0fcd73365775d.webp"></Avtar>
					</Box>
					<Box width="60%">
						Creative, entrepreneurial and innovative developer who drove tremendous cost savings and became trusted employee for
						high-profile projects. A team player and an effective leader in different business environments. Interested in
						latest technological solutions and their role in transforming web, space and economy.
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Intro;
