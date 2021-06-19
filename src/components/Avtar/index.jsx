import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from '../../atoms/constants';

const Avtar = forwardRef(({ className, src, style, onClick }, ref) => {
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	return (
		<>
			<div onClick={onClick} ref={ref} className={className} style={style}>
				<img src={src}></img>
			</div>
			<style jsx>{`
				img {
					height: 232px;
					display: block;
					margin: 0 auto;
				}
				@media only screen and (max-width: 600px) {
					img {
						justify-content: space-between;
						align-items: center;
						padding-bottom: 30px;
					}
				}
			`}</style>
		</>
	);
});

Avtar.propTypes = {
	className: PropTypes.string,
};

export default Avtar;
