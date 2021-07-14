import { forwardRef, useEffect, cloneElement, useLayoutEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Carousel = forwardRef(({ className, style, children, type, ...props }, ref) => {
	const carouselRef = createRef(ref);
	useLayoutEffect(() => {
		const carousel = carouselRef.current;
		const height = window.innerHeight - carousel.getBoundingClientRect().top;
		for (let i = 0; i < carousel.children.length; i++) {
			carousel.children[i].style.height = `${height}px`;
		}
	});
	return (
		<>
			<div ref={carouselRef} className={className} style={style}>
				{children?.map((element, index) =>
					cloneElement(element, { style: { ...element.props.style, margin: '15px 20px 10px 0' } })
				)}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: ${type === 'vertical' ? 'column' : 'row'};
					overflow-x: scroll;
					overflow-y: ${type === 'vertical' ? 'scroll' : 'none'};
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
