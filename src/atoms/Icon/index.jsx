import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { m } from '../constants';

const Icon = forwardRef(({ className, onClick, style, type, ...props }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	const DynamicComponent = dynamic(() => import(`../../svg`).then((svg) => svg[type]));

	return (
		<>
			<div onClick={onClick} ref={ref} className={className} style={style}>
				<DynamicComponent type={type} />
			</div>
			<style jsx>{`
				div {
					cursor: ${onClick ? 'pointer' : null};
				}

				svg {
					height: ${m};
					width: ${m};
					stroke: var(--color);
					fill: var(--color);
				}
			`}</style>
		</>
	);
});

Icon.propTypes = {
	className: PropTypes.string,
};

export default Icon;
