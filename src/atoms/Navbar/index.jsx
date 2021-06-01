import { forwardRef, useEffect, useState, cloneElement, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s } from '../constants';

let selectedNavItem;

const Navbar = forwardRef(({ title, onTitleClick, className, padH, style, align, bold, ...props }, ref) => {
	const [isModal, setIsModal] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const navItemStyle = { margin: `0 ${padH}`, cursor: 'pointer', fontWeight: `${bold ? '600' : '500'}` };
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
						style: { margin: '30px', cursor: 'pointer' },
					})
				)}
			</Modal>
		);
	}
	const onNavBarClick = (e) => {
		if (selectedNavItem) {
			selectedNavItem.style.borderBottom = '';
		}
		if (e?.target) {
			e.target.style.borderBottom = '5px solid var(--color-secondary)';
			selectedNavItem = e.target;
		}
	};

	const onNavHeaderClick = () => {
		onTitleClick();
		onNavBarClick();
	};
	return (
		<>
			<div ref={ref} className={className} style={{ justifyContent: align }}>
				<div onClick={onNavHeaderClick} style={navItemStyle}>
					{title}
				</div>
				{isModal ? (
					<span className="closeBtn">
						<Icon type="menu" onClick={handleShowModal} />
					</span>
				) : (
					props.children.map((element) => {
						if (element.props.navUtils) {
							return (
								<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
									{cloneElement(element, {
										style: { margin: `0 ${padH}`, cursor: 'pointer' },
									})}
								</motion.div>
							);
						}
						return (
							<motion.div onClick={onNavBarClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
								{cloneElement(element, {
									style: navItemStyle,
								})}
							</motion.div>
						);
					})
				)}
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
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
