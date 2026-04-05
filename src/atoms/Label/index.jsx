import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { xxs } from './../constants';

const Label = forwardRef(({ className, text, style, size, type, random, m, ...props }, ref) => {
	type = type ?? 'info';
	const isSecondary = type === 'secondary';
	return (
		<>
			<div className={className} style={style} {...props} ref={ref}>
				{text}
			</div>
			<style jsx>{`
				div {
					padding: ${xxs};
					background-color: ${isSecondary ? 'transparent' : `var(--color-${type})`};
					border: ${isSecondary
						? '1px solid color-mix(in srgb, var(--color-secondary) 45%, var(--color-background))'
						: 'none'};
					border-radius: 5px;
					color: ${isSecondary ? 'color-mix(in srgb, var(--color-secondary) 65%, var(--color-text))' : 'white'};
					font-size: ${size ? size : '0.9rem'};
					font-weight: 500;
					opacity: 0.9;
					margin: ${m ? '8px 10px' : 'none'};
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
