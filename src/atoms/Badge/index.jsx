import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Badge = forwardRef(({ className, url, style, ...props }, ref) => {
	return (
		<>
			<div style={style}></div>
			<style jsx>{`
				div {
					background: url(${url});
					height: 40px;
					width: 40px;
					background-size: cover;
					border-radius: 20px;
				}
			`}</style>
		</>
	);
});

Badge.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string,
};

export default Badge;
