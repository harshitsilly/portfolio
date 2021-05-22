import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Box = forwardRef(({ className, style, header, ...props }, ref) => {
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
						text-align: center;
						font-weight: ${props.bold ? 600 : 'auto'};
						font-size: header;
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
		</>
	);
});

Box.propTypes = {
	className: PropTypes.string,
	header: PropTypes.boolean,
	bold: PropTypes.boolean,
};

export default Box;
