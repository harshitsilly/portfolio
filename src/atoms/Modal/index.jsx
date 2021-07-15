import { forwardRef, useEffect, useState, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s, m } from '../constants';

const Modal = forwardRef(({ title, className, onClose, style, bgColor, full, ...props }, ref) => {
	const [_document, set_document] = useState(null);

	useEffect(() => {
		set_document(document);
	});

	if (!_document) {
		return null;
	}
	const container = _document.getElementsByClassName('app')[0];

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
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%);
									z-index: 1;
									background-color: ${bgColor ? bgColor : 'var(--background)'};
									border-radius: 20px;
									width: ${full ? '100%' : 'auto'};
									height: ${full ? '100%' : 'auto'};
								}
								.content {
									padding: ${full ? '1rem' : '2rem'};
								}
								.closeBtn {
									position: absolute;
									top: ${m};
									right: ${m};
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
										border-radius: 0px;
									}
									.content {
										padding: ${full ? '1rem' : '2rem'};
										overflow-y: scroll;
										height: 100vh;
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
