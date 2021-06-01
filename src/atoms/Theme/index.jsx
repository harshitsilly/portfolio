import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

let theme;
const Theme = forwardRef(({ className, dark, style }, ref) => {
	const [isDark, setIsDark] = useState(theme ?? dark);
	useEffect(() => {
		handleTheme();
		return () => {};
	}, []);

	const handleTheme = () => {
		document.documentElement.setAttribute('data-theme', `${isDark ? 'dark' : 'light'}`);
		setIsDark(!isDark);
		theme = isDark;
	};
	return (
		<>
			<Icon ref={ref} className={className} style={style} onClick={handleTheme} type={isDark ? 'moon' : 'sun'}></Icon>
		</>
	);
});

Theme.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
};

export default Theme;
