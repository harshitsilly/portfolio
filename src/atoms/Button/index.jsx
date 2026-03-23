import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Button = forwardRef(({ className, style, border, onClick, isLoading, text, color, variant, children, ...props }, ref) => {
	const btnBorder = border ?? true;
	const btnVariant = variant ?? 'default';
	const isDisabled = Boolean(isLoading) || Boolean(props.disabled);

	const backgroundByVariant = {
		primary: 'var(--color-primary)',
		secondary: 'color-mix(in srgb, var(--color-secondary) 18%, var(--color-background))',
		default: 'var(--color-gray-200)',
	};

	const borderByVariant = {
		primary: 'var(--color-primary)',
		secondary: 'color-mix(in srgb, var(--color-secondary) 50%, var(--color-gray-700))',
		default: 'var(--color-gray-900)',
	};

	const textByVariant = {
		primary: 'var(--color-gray-1000)',
		secondary: 'var(--color)',
		default: 'var(--color)',
	};

	const resolvedBackground = color || backgroundByVariant[btnVariant] || backgroundByVariant.default;
	const resolvedBorder = borderByVariant[btnVariant] || borderByVariant.default;
	const resolvedText = textByVariant[btnVariant] || textByVariant.default;
	const buttonText = children || text;

	return (
		<>
			<button
				type="button"
				ref={ref}
				className={className}
				onClick={onClick}
				style={style}
				{...props}
				disabled={isDisabled}
				aria-busy={Boolean(isLoading)}
			>
				{buttonText}
			</button>
			<style jsx>{`
				button {
					width: max-content;
					text-align: center;
					border-radius: ${Constants.xs};
					cursor: pointer;
					padding: ${Constants.xxs} ${Constants.xs};
					border: ${btnBorder ? `2px solid ${resolvedBorder}` : 'none'};
					background-color: ${resolvedBackground};
					color: ${resolvedText};
					transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
				}

				button:hover:not(:disabled) {
					transform: translateY(-1px);
					filter: brightness(1.03);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
				}

				button:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}
			`}</style>
		</>
	);
});

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	isLoading: PropTypes.bool,
	border: PropTypes.bool,
	text: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
	children: PropTypes.node,
};

export default Button;
