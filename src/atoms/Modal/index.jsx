import { forwardRef, useEffect, useState, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s } from '../constants';

const Modal = forwardRef(({ title, className, onClose, style, bgColor, ...props }, ref) => {
	useEffect(() => {});

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
									height: 94vh;
									width: 60vw;
									min-width: 800px;
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%);
									z-index: 1;
									background-color: ${bgColor ? bgColor : 'var(--background)'};
								}
								.content {
									padding: 2rem;
								}
								.closeBtn {
									position: absolute;
									top: ${s};
									right: ${s};
								}
								@media only screen and (max-width: 600px) {
									.modal {
										position: absolute;
										height: 100vmax;
										width: 100vmin;
										min-width: auto;
										top: 0;
										left: 0;
										transform: none;
										z-index: 1;
										background-color: var(--background);
									}
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
