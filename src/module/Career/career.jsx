import { useState, useEffect, cloneElement } from 'react';

import { Box, Text, Dropdown, MeshGradient } from '../../atoms';
import { useRouter } from 'next/router';
import styles from './career.module.scss';
import { data } from './data';
import useIsMobile from '../../utils/useIsMobile';

const work = [...data.filter(({ type }) => type === 'Work')[0].data];
export default function Career() {
	const [selected, setSelected] = useState(1);
	const [content, setContent] = useState();
	const router = useRouter();
	const isMobile = useIsMobile();

	const sortedWork = [...work].sort((a, b) => b.index - a.index);

	useEffect(() => {
		setContent(sortedWork[sortedWork.length - 1].content);
	}, []);

	return (
		<>
			<Box className={styles.pageWrap}>
				<Box className={styles.pageHead} direction="row" alignItems="center">
					<Box className={styles.backHome} onClick={() => router.push('/')}>
						{isMobile ? '← Back' : '← Back to home'}
					</Box>
					<Box>
						<Text bold header>
							Career Journey
						</Text>
					</Box>
				</Box>

				{!isMobile && (
					<Box direction="row" mDirection="row" className={styles.header}>
						{sortedWork.map(({ name, time, logo, index, content }) => (
							<Box
								key={name}
								direction="row"
								mDirection="row"
								className={`${styles.tabItem} ${selected === index ? styles.tabItemActive : ''}`}
								onClick={() => {
									setSelected(index);
									setContent(content);
								}}
							>
								<img className={styles.logo} src={logo} alt={name} />
								<Box>
									<Text bold>{name}</Text>
									<Text className={styles.time}>{time}</Text>
								</Box>
							</Box>
						))}
					</Box>
				)}

				{isMobile && (
					<Dropdown className={styles.mobileDropdown}>
						{[...work]
							.sort((a, b) => a.index - b.index)
							.map(({ name, time, logo, index, content }) => (
								<Box
									key={name}
									direction="row"
									mDirection="row"
									className={`${styles.tabItem} ${selected === index ? styles.tabItemActive : ''}`}
									onClick={() => {
										setSelected(index);
										setContent(content);
									}}
								>
									<img className={styles.logo} src={logo} alt={name} />
									<Box>
										<Text bold>{name}</Text>
										<Text className={styles.time}>{time}</Text>
									</Box>
								</Box>
							))}
					</Dropdown>
				)}

				<Box className={styles.contentWrap}>{content && cloneElement(content, { isMobile })}</Box>
			</Box>
		</>
	);
}
