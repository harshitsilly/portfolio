import { Box, Text, Button } from '../../atoms';
import Curve from '../../svg/curve.svg';
import styles from './index.module.scss';

export default function Footer({}) {
	return (
		<>
			<Box className={styles.footer}>
				<Curve style={{ transform: 'rotate(180deg)', width: '100%', fill: 'var(--color-footer)' }}></Curve>
				<Box pad="l">
					<Text bold header>
						Interesting in hiring me or just want to catch up?
					</Text>
					<Text>Drop me a line at harshit886@outlook.com or grab 30 mins to hop on a call with me</Text>
					<Button text="Let's talk one-on-one!" onClick={() => window.open('https://calendly.com/harshit886/30min')}></Button>
				</Box>
			</Box>
		</>
	);
}
