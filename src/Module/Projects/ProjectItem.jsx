import { useCallback, useEffect, useState } from 'react';
import { Box, Text, Modal } from '../../atoms';
import { setUrl } from '../../utils';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';

const ProjectItem = ({ header, subDetail, imgUrl }) => {
	const [showModal, setShowModal] = useState(false);
	useEffect(async () => {}, []);
	const handleOpenModal = useCallback((event) => {
		setShowModal(true);
	});
	const isMobile = useIsMobile();
	return (
		<>
			{showModal && <Modal onClose={() => setShowModal(false)}>test data</Modal>}
			<Box className={styles.card} onClick={handleOpenModal}>
				<Box
					style={{
						background: `url(${imgUrl})`,
						height: '250px',
						width: `${isMobile ? '320px' : '380px'}`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></Box>
				<Box>
					<Text bold header>
						{header}
					</Text>

					<Text className={styles.subHeader}>{subDetail}</Text>
				</Box>
			</Box>
		</>
	);
};

export default ProjectItem;
