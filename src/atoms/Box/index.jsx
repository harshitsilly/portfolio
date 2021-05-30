import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Box = forwardRef(({ className, onClick, style, ...props }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	return (
		<>
			<div ref={ref} onClick={onClick} className={className} style={style}>
				{props.children}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: ${props.direction ?? 'column'};
					padding: ${Constants[props.pad]};
					width: ${props.width ?? 'auto'};
				}

				@media only screen and (max-width: 600px) {
					div {
						flex-direction: ${props.mDirection ?? 'column'};
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
