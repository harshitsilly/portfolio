import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Box = forwardRef(({ className, onClick, style, block, ...props }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	if (block) {
		return (
			<>
				<div ref={ref} onClick={onClick} className={className} style={style}>
					{props.children}
				</div>
				<style jsx>{`
					div {
						padding: ${Constants[props.pad]};
						cursor: ${onClick ? 'pointer' : 'inherit'};
					}
				`}</style>
			</>
		);
	}
	return (
		<>
			<div ref={ref} onClick={onClick} className={className} style={style}>
				{props.children}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: ${props.direction ?? 'column'};
					flex-wrap: wrap;
					padding: ${Constants[props.pad]};
					width: ${props.width ?? 'auto'};
					cursor: ${onClick ? 'pointer' : 'inherit'};
				}

				@media only screen and (max-width: 600px) {
					div {
						flex-direction: ${props.mDirection ?? 'column'};
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
