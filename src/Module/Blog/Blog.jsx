import { useEffect, useState, useCallback } from 'react';
import { Box } from '../../atoms';
import styles from './index.module.scss';
import useIsMobile from '../../utils/useIsMobile';
import { useRouter } from 'next/router';
// import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const Blog = ({ blogUrl, ...props }) => {
	const isMobile = useIsMobile();
	const [loader, setLoader] = useState(true);

	useEffect(async () => {
		setLoader(false);
	}, [blogUrl]);
	const router = useRouter();
	const loadBlog = useCallback((page) => {
		router.push(page);
	});
	return (
		<Box direction="row" onClick={() => loadBlog(header)}>
			<MDXRemote {...source} components={components} />
		</Box>
	);
};

export async function getStaticProps() {
	// MDX text - can be from a local file, database, anywhere
	const source = 'Some **mdx** text, with a component <Test />';
	const mdxSource = await serialize(source);
	return { props: { source: mdxSource, frontMatter: data } };
}

export default Blog;
