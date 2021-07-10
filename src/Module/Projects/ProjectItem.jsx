import { useCallback, useEffect, useState } from 'react';
import { Box, Text, Modal, Carousel, Label } from '../../atoms';
import { setUrl } from '../../utils';
import useIsMobile from '../../utils/useIsMobile';
import styles from './index.module.scss';
import Icon from './../../atoms/Icon/index';

const ProjectItem = ({ header, subDetail, imgUrl, images, tag, content, type, link, github, npm }) => {
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
					<Box pad={isMobile ? '' : 'm'}>
						<Box direction="row" mDirection="row">
							<Text bold header align="left" style={{ paddingRight: '20px' }}>
								{header}
							</Text>
							<Box direction="row" mDirection="row" style={{ alignItems: 'center' }}>
								<Label size="13px" type="info" text={type} style={{ marginRight: '10px' }} />
								{tag && <Label size="13px" type="secondary" text={tag} style={{ marginRight: '10px' }} />}
								{npm && (
									<a href={npm.link} style={{ marginRight: '10px' }} target="_blank">
										<img src={npm.img} />
									</a>
								)}
								{github && <Icon type="github" style={{ marginRight: '10px' }} onClick={() => window.open(github)} />}
								{link && <Icon type="link" onClick={() => window.open(link)} />}
							</Box>
						</Box>

						{Array.isArray(images) && (
							<Carousel style={isMobile ? {} : { width: '350px', position: 'absolute', right: 20 }}>
								{images?.map((url) => (
									<Box>
										<img style={{ height: '260px' }} src={setUrl(url)} />
									</Box>
								))}
							</Carousel>
						)}
						<Box style={images && (isMobile ? {} : { maxWidth: '350px' })}>{content}</Box>
					</Box>
				</Modal>
			)}
			<Box className={styles.card} onClick={handleOpenModal}>
				<Box
					style={{
						background: `url(${imgUrl}) center center / cover`,
						height: '250px',
						width: `${isMobile ? '320px' : '380px'}`,
					}}
				></Box>
				{tag && <Label className={styles.cardLabel} type="secondary" text={tag} />}
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
