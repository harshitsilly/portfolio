import { useEffect, useRef, useState } from 'react';
import { Box, Text, Icon, MeshGradient } from '../../atoms';
import { motion } from 'framer-motion';
import Skills from './skills';
import HomeProjectsPreview from './HomeProjectsPreview';
import { data } from './data';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const reveal = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0 },
};

const RevealOnScroll = ({ children, delay = 0 }) => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '-5px 0px 0px 0px' }
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return (
		<motion.div
			ref={ref}
			style={{ width: '100%' }}
			variants={reveal}
			initial="hidden"
			animate={isVisible ? 'show' : 'hidden'}
			transition={{ duration: 0.45, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
};

const Work = () => {
	const isMobile = useIsMobile();
	const router = useRouter();
	const workData = data.find((entry) => entry.type === 'Work')?.data || [];
	const educationData = data.find((entry) => entry.type === 'College')?.data || [];
	const sortedWork = [...workData].sort((a, b) => a.index - b.index);

	return (
		<>
			<MeshGradient />
			<Box id="experience" pad={isMobile ? 's' : 'xxl'} className={styles.shell}>
				<Box direction="column" mDirection="column" className={styles.career}>
					<RevealOnScroll>
						<Box pad={isMobile ? 's' : 'l'} style={{ position: 'relative' }} className={styles.panel}>
							<Box direction="row" mDirection="row" className={styles.sectionHeader}>
								<Text bold header align="left">
									Where I&apos;ve Worked
								</Text>
							</Box>

							<Box className={styles.experienceList}>
								{sortedWork.map((item) => (
									<Box key={item.name} className={styles.experienceItem}>
										<Box direction="row" mDirection="row" className={styles.experienceHead}>
											{item.logo && <img className={styles.listItemLogo} src={item.logo} alt={`${item.name} logo`} />}
											<Box className={styles.expHeadCopy}>
												<Text bold align="left" className={styles.listItemHeader}>
													{item.name}
												</Text>
												<Text align="left" className={styles.listItemTime}>
													{item.time}
												</Text>
											</Box>
										</Box>

										{/* {!!item.highlights?.length && (
										<Box className={styles.experienceHighlights}>
											{item.highlights.slice(0, 2).map((point) => (
												<Box key={point} direction="row" mDirection="row" className={styles.highlightRow}>
													<span className={styles.dot} />
													<Text align="left">{point}</Text>
												</Box>
											))}
										</Box>
									)} */}
									</Box>
								))}

								{!!educationData.length && (
									<Box className={styles.educationInline}>
										<Text bold align="left">
											Education
										</Text>
										{educationData.map((item) => (
											<Text key={item.name} align="left" className={styles.educationLine}>
												{item.name} · {item.time}
											</Text>
										))}
									</Box>
								)}
							</Box>

							<Box direction="row" mDirection="row" className={styles.fullCareerLink} onClick={() => router.push('/career')}>
								<Text align="left">View detailed career timeline →</Text>
							</Box>

							{/*
						{data.map((element, index) => (
							<PE {...element} key={index} />
						))}
						*/}
						</Box>
					</RevealOnScroll>

					<RevealOnScroll delay={0.08}>
						<Box id="skills" pad={isMobile ? 's' : 'l'} className={styles.panel}>
							<Text bold header align="left">
								Skills
							</Text>
							<Skills />
						</Box>
					</RevealOnScroll>
				</Box>
				<RevealOnScroll delay={0.14}>
					<HomeProjectsPreview />
				</RevealOnScroll>
			</Box>
		</>
	);
};

export default Work;
