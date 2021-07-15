import { useState, useEffect } from 'react';

import { Box, Text, Dropdown, Modal } from '../../atoms';
import { useRouter } from 'next/router';
import styles from './career.module.scss';
import { data } from './data';
import useIsMobile from '../../utils/useIsMobile';

const work = data.filter(({ type }) => type === 'Work')[0].data;
export default function Career() {
	const [selected, setSelected] = useState(work.length);
	const [content, setContent] = useState();
	const router = useRouter();
	const isMobile = useIsMobile();
	useEffect(() => {
		setContent(work[work.length - 1].content);
	}, []);
	return (
		<Modal onClose={() => router.push('/')} full>
			<Box>
				{!isMobile && (
					<Box direction="row" mDirection="row" className={styles.header}>
						{work
							.sort((a, b) => a.index - b.index)
							.map(({ name, time, logo, index, content }) => (
								<Box
									direction="row"
									mDirection="row"
									style={
										selected === index
											? {
													margin: '5px 18px',
													padding: '7px',
													background: 'var(--color-gray-100)',
													borderRadius: '5px',
											  }
											: { margin: '10px 25px' }
									}
									onClick={() => {
										setSelected(index);
										setContent(content);
									}}
								>
									<img className={styles.logo} src={logo} alt />
									<Box>
										<Text bold>{name}</Text>
										<Text style={{ opacity: 0.9, fontSize: '12px' }}>{time}</Text>
									</Box>
								</Box>
							))}
					</Box>
				)}
				{isMobile && (
					<Dropdown>
						{work
							.sort((a, b) => b.index - a.index)
							.map(({ name, time, logo, index, content }) => (
								<Box
									direction="row"
									mDirection="row"
									style={
										selected === index
											? {
													margin: '5px 18px',
													padding: '7px',
													background: 'var(--color-gray-100)',
													borderRadius: '5px',
											  }
											: { margin: '10px 25px' }
									}
									onClick={() => {
										setSelected(index);
										setContent(content);
									}}
								>
									<img className={styles.logo} src={logo} alt />
									<Box>
										<Text bold>{name}</Text>
										<Text style={{ opacity: 0.9, fontSize: '12px' }}>{time}</Text>
									</Box>
								</Box>
							))}
					</Dropdown>
				)}
				{content}
			</Box>
		</Modal>
	);
}
