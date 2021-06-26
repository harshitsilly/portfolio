import { useCallback, useEffect, useState } from 'react';
import { Box, Text, Modal, Carousel } from '../../atoms';
import { setUrl } from '../../utils';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';

const ProjectItem = ({ header, subDetail, imgUrl, images }) => {
	const [showModal, setShowModal] = useState(false);
	useEffect(async () => {}, []);
	const handleOpenModal = useCallback((event) => {
		setShowModal(true);
	});
	const isMobile = useIsMobile();
	return (
		<>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<Box pad={isMobile ? '' : 'm'} direction="row" style={{ justifyContent: 'space-between' }}>
						<Text bold header align="left">
							{header}
						</Text>
						{Array.isArray(images) && (
							<Carousel style={isMobile ? {} : { width: '350px' }}>
								{images?.map((url) => (
									<Box>
										<img style={{ height: '260px' }} src={setUrl(url)} />
									</Box>
								))}
							</Carousel>
						)}
					</Box>
				</Modal>
			)}
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
