import { Box, Text, Icon } from '../../atoms';
import useIsMobile from '../../utils/useIsMobile';

const BucketItem = ({ imageUrl, header }) => {
	const isMobile = useIsMobile();
	return (
		<>
			<Box pad="xs" direction="column">
				<Box pad={isMobile ? 'xs' : 's'} style={{ position: 'relative' }}>
					<Text style={{ fontFamily: 'cursive' }} header align="left">
						{header}
					</Text>
				</Box>
				<Box
					style={{
						width: `${isMobile ? 'auto' : '350px'}`,
						height: 250,
						backgroundImage: `url(${imageUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></Box>
			</Box>
		</>
	);
};

export default BucketItem;
