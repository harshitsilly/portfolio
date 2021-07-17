import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { xxs } from './../constants';

const Label = forwardRef(({ className, text, style, size, type, random, m, ...props }, ref) => {
	type = type ?? 'info';
	return (
		<>
			<div className={className} style={style}>
				{text}
			</div>
			<style jsx>{`
				div {
					padding: ${xxs};
					background-color: var(--color-${type});
					border-radius: 5px;
					color: white;
					font-size: ${size ? size : '0.9rem'};
					font-weight: 500;
					opacity: 0.9;
					width: max-content;
					margin: ${m ? '8px 10px' : 'auto'};
				}
			`}</style>
		</>
	);
});

Label.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	type: PropTypes.string,
};

export default Label;
