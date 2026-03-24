import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const THEME_STORAGE_KEY = 'portfolio-theme';

const Theme = forwardRef(({ className, dark, style }, ref) => {
	const [isDark, setIsDark] = useState(Boolean(dark));

	const applyTheme = (nextIsDark) => {
		document.documentElement.setAttribute('data-theme', nextIsDark ? 'dark' : 'light');
		try {
			localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? 'dark' : 'light');
		} catch (error) {
			// ignore localStorage write failures
		}
	};

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		let initialIsDark = Boolean(dark);
		try {
			const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
			if (savedTheme === 'dark') {
				initialIsDark = true;
			} else if (savedTheme === 'light') {
				initialIsDark = false;
			}
		} catch (error) {
			// ignore localStorage read failures
		}

		setIsDark(initialIsDark);
		applyTheme(initialIsDark);

		return () => {};
	}, [dark]);

	const handleTheme = () => {
		setIsDark((prev) => {
			const next = !prev;
			applyTheme(next);
			return next;
		});
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
