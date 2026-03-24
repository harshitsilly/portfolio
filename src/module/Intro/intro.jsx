import { Box, Text } from '../../atoms';
import { motion } from 'framer-motion';
import styles from './intro.module.scss';
import useIsMobile from '../../utils/useIsMobile';

const Intro = () => {
	const isMobile = useIsMobile();

	const highlights = [
		'Architected a micro-frontend monorepo with reusable packages, guardrails, and CI checks for faster multi-app releases.',
		'Reduced internal selfserve configuration development effort by ~80% through AppBuilder tool.',
		'Improved API consistency and integration speed by standardizing schema contracts and building the Revyre BFF layer.',
		'Reduced macOS app update payload size by up to 95% through the open-source electron-differential-updater.',
		'Shipped VymoRAG to production for faster enterprise knowledge retrieval and contextual assistant responses.',
	];

	const proofChips = [
		{ label: 'Experience', value: '10+ Years' },
		{ label: 'Latest Role', value: 'Principal MTS' },
	];

	const stagger = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.06,
			},
		},
	};

	const rise = {
		hidden: { opacity: 0, y: 14 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
		},
	};

	return (
		<>
			<Box id="hero" pad={isMobile ? '' : 'xl'} className={styles.introWrap}>
				<motion.div variants={stagger} initial="hidden" animate="visible">
					<Box
						direction="row"
						mDirection="column"
						pad={isMobile ? 's' : 'l'}
						className={styles.introGrid}
						style={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}
					>
						<motion.div variants={rise} className={styles.leftMotionPanel}>
							<Box width={'100%'} className={styles.leftPanel} pad="m">
								<Box direction="row" mDirection="row" className={styles.metaRow}>
									<Box block className={styles.openToWorkTag}>
										Open to opportunities
									</Box>
								</Box>
								<Text className={styles.name}>Harshit Sinha</Text>
								<Text className={styles.eyebrow}>Principal Frontend Engineer · India</Text>

								<Text className={styles.summary}>
									I build modern and scalable web applications where design systems, and engineering work together. Across
									Vymo, Saxo, Western Digital, and SAP Labs, I have led initiatives in reusable UI architecture, feature
									coding, developer productivity, and reliable release pipelines.
								</Text>

								<Box className={styles.proofGrid}>
									{proofChips.map((chip) => (
										<Box key={chip.label} className={styles.proofCard}>
											<Text className={styles.proofLabel}>{chip.label}</Text>
											<Text bold className={styles.proofValue}>
												{chip.value}
											</Text>
										</Box>
									))}
								</Box>
							</Box>
						</motion.div>

						<motion.div variants={rise} className={styles.rightMotionPanel}>
							<Box id="about" width={'100%'} className={styles.rightPanel}>
								<Text bold align="left" className={styles.panelTitle}>
									Highlights
								</Text>

								<Box className={styles.highlights}>
									{highlights.map((line) => (
										<Box key={line} direction="row" mDirection="row" className={styles.highlightItem}>
											<span className={styles.dot} />
											<Text align="left">{line}</Text>
										</Box>
									))}
								</Box>
							</Box>
						</motion.div>
					</Box>
				</motion.div>
			</Box>
		</>
	);
};

export default Intro;
