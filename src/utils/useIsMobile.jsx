import { useEffect, useState } from 'react';

export default function () {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		function handleResize() {
			if (window.outerWidth <= 600) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	return isMobile;
}
