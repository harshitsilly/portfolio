import { Box, Navbar, Theme } from '../src/atoms';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
	const router = useRouter();
	return (
		<>
			<Box pad="l">
				<Navbar title="Harshit Sinha" onTitleClick={() => router.push('/')} padH="35px" align="center" bold>
					{/* <Box>Resume</Box> */}
					<Box onClick={() => router.push('snippets')}>Snippets</Box>
					<Box onClick={() => window.open('https://battery941.wixsite.com/stockmaster')}>Blog</Box>
					<Box onClick={() => window.open('http://localhost:57078')}>StoryBoard</Box>

					<Box navUtils>
						<Theme dark />
					</Box>
				</Navbar>
			</Box>

			{children}
		</>
	);
}
