import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Theme = forwardRef(({ className, style, header, ...props }, ref) => {
	const [isDark, setIsDark] = useState(true);
	useEffect(() => {
		// window.addEventListener();
		return () => {};
	});

	const handleTheme = () => {
		document.documentElement.setAttribute('data-theme', `${isDark ? 'light' : 'dark'}`);
		setIsDark(!isDark);
	};
	return (
		<>
			<div ref={ref} className={className} style={style}>
				<Icon onClick={handleTheme} type={isDark ? 'sun' : 'moon'}></Icon>
			</div>
			<style jsx>{`
				div {
					text-align: center;
					font-weight: ${props.bold ? 600 : 'auto'};
					font-size: header;
				}
			`}</style>
		</>
	);
});

Theme.propTypes = {
	className: PropTypes.string,
	header: PropTypes.boolean,
	bold: PropTypes.boolean,
};

export default Theme;
