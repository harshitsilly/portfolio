import { Box, Text, Icon } from '../../atoms';
import useIsMobile from '../../utils/useIsMobile';
import BucketItem from './bucketItem';
import { BucketListData } from './data';

const BucketList = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<Box pad={isMobile ? 's' : 'xxl'} direction="column">
				<Box pad={isMobile ? '' : 'xxl'} style={{ position: 'relative' }}>
					<Text bold header style={{ fontFamily: 'cursive' }}>
						Traveling BucketList
					</Text>
				</Box>

				<Box pad={isMobile ? '' : 'xxl'} style={{ position: 'relative' }} direction="row">
					{BucketListData.map((element) => (
						<BucketItem {...element} />
					))}
				</Box>
			</Box>
		</>
	);
};

export default BucketList;
