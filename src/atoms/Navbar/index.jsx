import { forwardRef, useEffect, useState, cloneElement } from 'react';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s } from '../constants';

const Navbar = forwardRef(({ title, className, padH, style, ...props }, ref) => {
	const [isModal, setIsModal] = useState(false);
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		// window.addEventListener();
		function handleResize() {
			if (window.innerWidth <= 600) {
				setIsModal(true);
			} else {
				setIsModal(false);
				setShowModal(false);
			}
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const handleShowModal = () => setShowModal(!showModal);
	if (isModal && showModal) {
		return (
			<Modal onClose={handleShowModal}>
				{props.children.map((element) =>
					cloneElement(element, {
						style: { padding: '30px' },
					})
				)}
			</Modal>
		);
	}
	return (
		<>
			<div ref={ref} className={className} style={style}>
				<div>{title}</div>
				{isModal ? (
					<span className="closeBtn">
						<Icon type="menu" onClick={handleShowModal} />
					</span>
				) : (
					props.children.map((element) =>
						cloneElement(element, {
							style: { padding: `0 ${padH}` },
						})
					)
				)}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
					cursor: pointer;
				}
				.closeBtn {
					position: absolute;
					top: ${s};
					right: ${s};
				}
				@media only screen and (max-width: 600px) {
					div {
						justify-content: space-between;
					}
				}
			`}</style>
		</>
	);
});

Navbar.propTypes = {
	className: PropTypes.string,
	padH: PropTypes.string,
	title: PropTypes.string,
};

export default Navbar;
