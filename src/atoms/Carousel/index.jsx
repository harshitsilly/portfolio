import { forwardRef, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Carousel = forwardRef(({ className, style, children, ...props }, ref) => {
	return (
		<>
			<div ref={ref} className={className} style={style}>
				{children?.map((element, index) =>
					cloneElement(element, { style: { ...element.props.style, margin: '15px 20px 10px 0' } })
				)}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
					overflow-x: scroll;
				}
				@media only screen and (max-width: 600px) {
					div {
						width: 100%;
					}
				}
			`}</style>
		</>
	);
});

Carousel.propTypes = {
	className: PropTypes.string,
};

export default Carousel;
