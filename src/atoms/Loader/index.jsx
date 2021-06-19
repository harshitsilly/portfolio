import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Loader = forwardRef(({ className, style, type, size }, ref) => {
	const isBrowser = typeof window !== 'undefined';
	if (!isBrowser) {
		return;
	}
	const isDarkTheme = () => document.documentElement.getAttribute('data-theme') === 'dark';
	const DynamicComponent = dynamic(() =>
		import(`../../svg`).then((svg) => {
			if (isDarkTheme()) {
				return svg.moon;
			}
			return svg.sun;
		})
	);

	const loaderSize = size ?? '30px';
	return (
		<>
			<div ref={ref} className={className} style={style}>
				<motion.div
					ref={ref}
					className={`${className} loader`}
					style={style}
					animate={{ opacity: 0, x: 100 }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<DynamicComponent />
				</motion.div>
			</div>

			<style jsx>{`
				div {
					position: absolute;
					height: ${loaderSize};
					width: ${loaderSize};
					left: 50%;
					margin-left: -calc(loaderSize/2);
					top: 50%;
					margin-top: -calc(loaderSize/2);
				}
				svg {
					height: ${loaderSize};
					width: ${loaderSize};
					stroke: ${isDarkTheme() ? '#FFEB3B' : '#F9A825'};
					fill: ${isDarkTheme() ? '#FFEB3B' : '#F9A825'};
				}
			`}</style>
		</>
	);
});

Loader.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	isLoading: PropTypes.boolean,
	border: PropTypes.boolean,
};

export default Loader;
