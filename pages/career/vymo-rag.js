import { Box, Text, Button } from '../../src/atoms';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function VymoRagPage() {
	const router = useRouter();
	const [videosExist, setVideosExist] = useState(null);

	useEffect(() => {
		// Check if videos exist
		const checkVideos = async () => {
			try {
				const [v1, v2] = await Promise.all([
					fetch('/images/career/vymo/videos/VymoRag_v1.0.0.mp4'),
					fetch('/images/career/vymo/videos/Vymo Rag 1.0.1.mp4'),
				]);
				setVideosExist(v1.ok && v2.ok);
			} catch {
				setVideosExist(false);
			}
		};
		checkVideos();
	}, []);

	return (
		<Box
			pad="m"
			style={{
				maxWidth: '1200px',
				margin: '0 auto',
			}}
		>
			<Text header bold style={{ marginTop: '20px' }}>
				VymoRag Videos
			</Text>
			{videosExist === false && (
				<Text style={{ color: 'var(--color-error)', marginTop: '10px' }}>
					Videos are not yet added. Please add the following files to{' '}
					<code style={{ background: 'var(--color-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>
						public/images/career/vymo/videos/
					</code>
					:
					<br />
					- VymoRag_v1.0.0.mp4
					<br />- Vymo Rag 1.0.1.mp4
				</Text>
			)}
			<Box
				direction="row"
				mDirection="column"
				style={{
					marginTop: '20px',
					gap: '20px',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				<Box
					style={{
						width: '100%',
						background: 'var(--color-gray-100)',
						borderRadius: '8px',
						padding: '16px',
					}}
				>
					<Text bold>VymoRag v1.0.0</Text>
					{videosExist && (
						<video
							controls
							style={{
								width: '100%',
								height: 'auto',
								borderRadius: '8px',
								marginTop: '10px',
								maxHeight: '70vh',
							}}
						>
							<source src="/images/career/vymo/videos/VymoRag_v1.0.0.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					)}
				</Box>
				<Box
					style={{
						width: '100%',
						background: 'var(--color-gray-100)',
						borderRadius: '8px',
						padding: '16px',
					}}
				>
					<Text bold>VymoRag 1.0.1</Text>
					{videosExist && (
						<video
							controls
							style={{
								width: '100%',
								height: 'auto',
								borderRadius: '8px',
								marginTop: '10px',
								maxHeight: '70vh',
							}}
						>
							<source src="/images/career/vymo/videos/Vymo Rag 1.0.1.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					)}
				</Box>
			</Box>
		</Box>
	);
}
