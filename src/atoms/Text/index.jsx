import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Text = forwardRef(({ className, style, align, header, bold, ...props }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	if (header) {
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
	}
	return (
		<>
			<span ref={ref} className={className} style={style}>
				{props.children}
			</span>
			<style jsx>{`
				span {
					text-align: ${align ? align : 'center'};
					font-weight: ${bold ? 600 : 'auto'};
				}
			`}</style>
		</>
	);
});

Text.propTypes = {
	className: PropTypes.string,
	align: PropTypes.string,
	header: PropTypes.boolean,
	bold: PropTypes.boolean,
};

export default Text;
