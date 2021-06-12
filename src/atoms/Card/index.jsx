import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Text = forwardRef(({ className, style, ...props }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	return (
		<>
			<div ref={ref} className={className} style={style}>
				{props.children}
			</div>
			<style jsx>{`
				div {
					text-align: ${align ? align : 'center'};
					font-weight: ${bold ? 600 : 'auto'};
					font-size: ${header ? Constants.m : 'auto'};
				}
			`}</style>
		</>
	);
});

Text.propTypes = {
	className: PropTypes.string,
};

export default Text;
