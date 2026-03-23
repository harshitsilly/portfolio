import { Box, Text } from '../../atoms';
import { motion } from 'framer-motion';
import styles from './intro.module.scss';
import useIsMobile from '../../utils/useIsMobile';

const Intro = () => {
	const isMobile = useIsMobile();

	const highlights = [
		'Architected a micro-frontend monorepo with reusable packages, guardrails, and CI checks for faster multi-app releases.',
		'Built internal AppBuilder workflows that reduced configuration-tool development time by ~80%.',
		'Open-sourced electron-differential-updater for macOS, cutting update payload size by up to 95%.',
		'Delivered production AI workflows (VymoRAG) for knowledge sync, retrieval, and contextual assistant experiences.',
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
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const rise = {
		hidden: { opacity: 0, y: 18 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
		},
	};

	return (
		<>
			<Box id="hero" pad={isMobile ? 's' : 'xl'} className={styles.introWrap}>
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
								<Text className={styles.eyebrow}>Principal Frontend Engineer · Delhi</Text>

								<Text className={styles.summary}>
									I build modern web foundations where design systems, and engineering work together. Across Vymo, Saxo,
									Western Digital, and SAP Labs, I have led initiatives in reusable UI architecture, application coding ,
									developer productivity, and reliable release pipelines.
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
