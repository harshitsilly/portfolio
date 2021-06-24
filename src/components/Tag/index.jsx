import { useEffect } from 'react';
import { Box } from '../../atoms';
import styles from './index.module.scss';

const Tag = ({ data, className, onChangeTag, selectedTag, direction, noBorder }) => {
	useEffect(async () => {}, []);
	return (
		<Box
			className={`${styles.tag} ${className}`}
			direction={direction ? direction : 'row'}
			mDirection="row"
			style={
				direction === 'column' ? { justifyContent: 'space-evenly', alignItems: 'center', maxHeight: '400px', height: '100%' } : {}
			}
		>
			{data.map((tag) => (
				<Box
					style={
						noBorder
							? selectedTag?.toLowerCase() === tag.toLowerCase()
								? { borderBottom: '4px solid var(--color-tertiary)', padding: 0 }
								: { padding: 0 }
							: direction === 'column'
							? { borderBottom: '1px solid var(--color-gray-400)', padding: 0 }
							: { borderRight: '1px solid var(--color-gray-400)' }
					}
					className={selectedTag?.toLowerCase() === tag.toLowerCase() ? styles.tagSelected : styles.tag}
					onClick={() => {
						onChangeTag(tag);
					}}
				>
					{tag}
				</Box>
			))}
		</Box>
	);
};

export default Tag;
