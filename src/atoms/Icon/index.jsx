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
			<span onClick={onClick} ref={ref} className={className} style={{ ...style, fill: 'var(--color-text)' }}>
				<DynamicComponent />
			</span>
			<style jsx>{`
				span {
					cursor: ${onClick ? 'pointer' : null};
				}

				svg {
					height: ${m};
					width: ${m};
				}
			`}</style>
		</>
	);
});

Icon.propTypes = {
	className: PropTypes.string,
};

export default Icon;
