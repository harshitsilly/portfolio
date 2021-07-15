import { forwardRef, useState, cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from './../Icon';

const Dropdown = forwardRef(({ className, selectedIndex, style, size, type, children, ...props }, ref) => {
	const [selectedKey, setSelectedKey] = useState(selectedIndex ?? 0);
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<>
			<div id="header" className={className} style={style} onClick={() => setShowDropdown(!showDropdown)}>
				<Icon style={{ position: 'absolute', right: '30px', top: '20px' }} type="down" />
				{children[selectedKey]}
			</div>
			{showDropdown && (
				<div id="dropDown">
					{children.map((element, index) =>
						cloneElement(element, {
							onClick: () => {
								element.props.onClick();
								setSelectedKey(index);
								setShowDropdown(false);
							},
						})
					)}
				</div>
			)}
			<style jsx>{`
				div#header {
					margin: 5px 10px;
					position: relative;
				}

				#dropDown {
					margin: 0 10px;
				}
			`}</style>
		</>
	);
});

Dropdown.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	type: PropTypes.string,
};

export default Dropdown;
