import { forwardRef, useEffect, cloneElement, useLayoutEffect, createRef, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

let scrollPosition = 0;
const Carousel = forwardRef(({ className, style, children, type, noScroll, ...props }, ref) => {
	const carouselRef = createRef(ref);
	const [selectedDot, setSelectedDot] = useState(0);

	let isScrolling;

	useEffect(() => {
		if (type === 'vertical') {
			const carousel = carouselRef.current;
			carousel.addEventListener('scroll', () => {
				window.clearTimeout(isScrolling);

				// Set a timeout to run after scrolling ends
				isScrolling = setTimeout(function () {
					// Run the callback
					if (carousel.scrollTop > scrollPosition) {
						setSelectedDot(selectedDot + 1);
					} else {
						setSelectedDot(selectedDot - 1);
					}
				}, 50);
			});
		}
		() => carousel.removeEventListener('scroll');
	}, []);
	useLayoutEffect(() => {
		if (type === 'vertical') {
			const carousel = carouselRef.current;
			const height = window.innerHeight - carousel.getBoundingClientRect().top;
			carousel.style.height = `${height}px`;
			for (let i = 0; i < carousel.children.length; i++) {
				carousel.children[i].style.height = `${height - 25}px`;
			}
		}
	}, [carouselRef.current]);

	useLayoutEffect(() => {
		if (type === 'vertical') {
			const carousel = carouselRef.current;
			carousel.scrollTo({ top: selectedDot * carousel.getBoundingClientRect().height, left: 0, behavior: 'smooth' });
		}
	}, [selectedDot]);
	return (
		<>
			<div>
				<div ref={carouselRef} className={className} style={style}>
					{children?.map((element, index) =>
						cloneElement(element, { style: { ...element.props.style, margin: '12.5px 20px 12.5px 0' } })
					)}
				</div>
				{type === 'vertical' && noScroll && children?.length > 1 && (
					<div id="scroll">
						{children?.map((element, index) => (
							<motion.div
								onClick={() => {
									setSelectedDot(index);
								}}
								style={{ cursor: 'pointer' }}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								key={index}
							>
								<div
									className="dot"
									style={selectedDot == index ? { height: '13px', width: '13px', borderRadius: '6.5px' } : {}}
								/>
							</motion.div>
						))}
					</div>
				)}
			</div>
			<style jsx>{`
				div {
					display: ${type === 'vertical' ? 'block' : 'flex'};
					flex-direction: ${type === 'vertical' ? '' : 'row'};
					overflow-x: ${type === 'vertical' ? 'none' : 'scroll'};
					overflow-y: ${type === 'vertical' ? 'scroll' : 'none'};
				}

				div::-webkit-scrollbar {
					width: ${noScroll ? 0 : 'auto'};
					height: ${noScroll ? 0 : 'auto'};
				}
				div.dot {
					z-index: 100;
					height: 10px;
					width: 10px;
					margin: 10px 0;
					background: var(--color-gray-700);
					border-radius: 5px;
				}
				#scroll {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: fixed;
					top: 50%;
					right: 20px;
				}

				@media only screen and (max-width: 600px) {
					div {
						width: 100%;
					}

					#scroll {
						display: flex;
						flex-direction: column;
						align-items: center;
						position: fixed;
						top: 50%;
						right: 10px;
						width: 20px;
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
