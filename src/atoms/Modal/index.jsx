import { forwardRef, useEffect, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s, m } from '../constants';

const Modal = forwardRef(({ title, className, onClose, style, bgColor, full, glass = false, ...props }, ref) => {
	const [_document, set_document] = useState(null);

	useEffect(() => {
		set_document(document);
	});

	useLayoutEffect(() => {
		_document?.getElementsByTagName('body');
	});

	if (!_document) {
		return null;
	}
	const container = _document.getElementsByTagName('body')[0];

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
							<div className="modalOverlay"></div>
							<style jsx>{`
								.modalOverlay {
									position: absolute;
									height: 100vh;
									width: 100vw;
									left: 0;
									top: 0;
									background-color: var(--background);
									opacity: ${glass ? '0.6' : '0.8'};
									${glass ? 'backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);' : ''}
								}
								.modal {
									position: absolute;
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%);
									z-index: 100;
									background-color: ${bgColor
										? bgColor
										: glass
										? 'var(--color-blurred-background)'
										: 'var(--background)'};
									border-radius: 20px;
									width: ${full ? '100%' : 'auto'};
									height: ${full ? '100%' : 'auto'};
									border: ${glass ? '1px solid var(--color-glass-border)' : '1.5px solid var(--color-gray-200)'};
									${glass
										? 'backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);'
										: ''}
								}
								.content {
									padding: ${full ? '1rem' : '2rem'};
								}
								.closeBtn {
									position: absolute;
									top: ${m};
									right: ${m};
									z-index: 1000;
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
										z-index: 100;
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
	glass: PropTypes.bool,
};

export default Modal;
