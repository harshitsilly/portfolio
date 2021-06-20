import { forwardRef, useEffect, useState, cloneElement, useRef } from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import Icon from './../Icon/index';
import { s } from '../constants';
import Text from './../Text/index';
import Badge from './../Badge/index';

let selectedNavItem;

const Navbar = forwardRef(({ title, onTitleClick, className, padH, style, align, bold, badgeUrl, ...props }, ref) => {
	const [isMobile, setIsMobile] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const selectedKey = useRef(null);

	useEffect(() => {
		// window.addEventListener();
		function handleResize() {
			if (window.outerWidth <= 600) {
				setIsMobile(true);
			} else {
				setShowModal(false);
				setIsMobile(false);
			}
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const handleShowModal = () => setShowModal(!showModal);

	const getNavStyle = (element) => {
		if (isMobile) {
			let style = { margin: ` ${padH} 0`, cursor: 'pointer', fontWeight: `${bold ? '600' : '500'}` };
			if (!isNaN(element) && selectedKey?.current !== element) {
				style = { ...style, ...{ opacity: 0.7 } };
			}
			return style;
		}

		return { margin: `0 ${padH}`, cursor: 'pointer', fontWeight: `${bold ? '600' : '500'}` };
	};

	const onNavBarClick = (e, fromHeader) => {
		if (isMobile && !fromHeader) {
			handleShowModal();
		} else {
			if (selectedNavItem) {
				selectedNavItem.style.borderBottom = '';
			}
			if (e?.currentTarget) {
				e.target.style.borderBottom = '5px solid var(--color-secondary)';
				selectedNavItem = e.target;
			}
		}
		selectedKey.current = parseInt(e?.currentTarget.getAttribute('data-key'));
	};

	const onNavHeaderClick = () => {
		onTitleClick();
		onNavBarClick(null, true);
	};

	const getNavContent = () => {
		return props.children.map((element, index) => {
			if (element.props.navUtils) {
				return (
					<motion.div whileHover={{ scale: 1.1 }} style={getNavStyle()} data-key={index} key={index}>
						{element}
					</motion.div>
				);
			}
			return (
				<motion.div
					onClick={(e) => {
						element.props.onClick();
						onNavBarClick(e);
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					style={getNavStyle(index)}
					data-key={index}
					key={index}
				>
					{cloneElement(element, {
						onClick: null,
					})}
				</motion.div>
			);
		});
	};
	if (isMobile && showModal) {
		return <Modal onClose={handleShowModal}>{getNavContent(true)}</Modal>;
	} else {
		return (
			<>
				<div ref={ref} className={className} style={{ justifyContent: align }}>
					<div onClick={onNavHeaderClick} style={!isMobile ? getNavStyle() : {}}>
						{badgeUrl && <Badge url={badgeUrl} style={{ marginRight: '20px' }} />}
						<Text bold>{title}</Text>
					</div>
					{isMobile ? (
						<span className="closeBtn">
							<Icon type="menu" onClick={handleShowModal} />
						</span>
					) : (
						getNavContent()
					)}
				</div>
				<style jsx>{`
					div {
						display: flex;
						flex-direction: row;
						align-items: center;
					}

					.closeBtn {
						position: absolute;
						top: ${s};
						right: ${s};
					}
					@media only screen and (max-width: 600px) {
						div {
							justify-content: space-between;
							align-items: center;
						}
					}
				`}</style>
			</>
		);
	}
});

Navbar.propTypes = {
	className: PropTypes.string,
	padH: PropTypes.string,
	title: PropTypes.string,
};

export default Navbar;
