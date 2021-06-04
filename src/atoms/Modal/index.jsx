import { forwardRef, useEffect, useState, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s } from '../constants';

const Modal = forwardRef(({ title, className, onClose, style, ...props }, ref) => {
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		// window.addEventListener();
		// function handleResize() {
		// 	if (window.innerWidth <= 600) {
		// 		setIsModal(true);
		// 	} else {
		// 		setIsModal(false);
		// 		setShowModal(false);
		// 	}
		// }
		// handleResize();
		// window.addEventListener('resize', handleResize);
		// return () => {
		// 	window.removeEventListener('resize', handleResize);
		// };
	});

	const container = document.getElementsByClassName('app')[0];

	return (
		<>
			{container
				? createPortal(
						<>
							<div ref={ref} className={`modal ${className}`} style={style}>
								<span className="closeBtn">
									<Icon type="close" onClick={onClose} />
								</span>
								<div className="content">{props.children}</div>
							</div>
							<style jsx>{`
								.modal {
									position: absolute;
									height: 100vmax;
									width: 100vmin;
									top: 0;
									right: 0;
									z-index: 1;
									background-color: var(--background);
									flex-direction: column;
								}
								.content {
									padding: 2rem;
								}
								.closeBtn {
									position: absolute;
									top: ${s};
									right: ${s};
								}
							`}</style>
						</>,
						container
				  )
				: null}
		</>
	);
});

Modal.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	title: PropTypes.string,
};

export default Modal;
