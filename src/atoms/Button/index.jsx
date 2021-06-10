import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Button = forwardRef(({ className, style, border, onClick, isLoading, text, color, ...props }, ref) => {
	const btnBorder = border ?? true;
	return (
		<>
			<div ref={ref} className={className} onClick={onClick} style={style}>
				{text}
			</div>
			<style jsx>{`
				div {
					width: max-content;
					text-align: center;
					border-radius: ${Constants.xs};
					cursor: pointer;
					padding: ${Constants.xxs} ${Constants.xs};
					border: ${btnBorder ? '2px solid var(--color-gray-900)' : null};
					background-color: ${color ? color : 'var(--color-gray-200)'};
				}
			`}</style>
		</>
	);
});

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	isLoading: PropTypes.boolean,
	border: PropTypes.boolean,
};

export default Button;
