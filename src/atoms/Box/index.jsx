import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Box = forwardRef(({ className, onClick, style, block, children, direction, mDirection, pad, width, ...rest }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	if (block) {
		return (
			<>
				<div ref={ref} onClick={onClick} className={className} style={style} {...rest}>
					{children}
				</div>
				<style jsx>{`
					div {
						padding: ${Constants[pad]};
						cursor: ${onClick ? 'pointer' : 'inherit'};
					}
				`}</style>
			</>
		);
	}
	return (
		<>
			<div ref={ref} onClick={onClick} className={className} style={style} {...rest}>
				{children}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: ${direction ?? 'column'};
					flex-wrap: wrap;
					padding: ${Constants[pad]};
					width: ${width ?? 'auto'};
					cursor: ${onClick ? 'pointer' : 'inherit'};
				}

				@media only screen and (max-width: 600px) {
					div {
						flex-direction: ${mDirection ?? 'column'};
						width: auto;
					}
				}
			`}</style>
		</>
	);
});

Box.propTypes = {
	className: PropTypes.string,
	direction: PropTypes.string,
	pad: PropTypes.string,
};

export default Box;
