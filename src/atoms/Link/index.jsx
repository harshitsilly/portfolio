import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

const Link = forwardRef(({ className, style, align, header, bold, url, type, ...props }, ref) => {
	type = type ?? 'info';
	return (
		<>
			<span ref={ref} className={className} style={style} onClick={() => window.open(url)}>
				{props.text}
			</span>
			<style jsx>{`
				span {
					color: var(--color-${type});
					text-align: ${align ? align : 'center'};
					font-weight: ${bold ? 600 : 'auto'};
					font-size: ${header ? Constants.m : 'auto'};
					cursor: pointer;
				}
			`}</style>
		</>
	);
});

Link.propTypes = {
	className: PropTypes.string,
	align: PropTypes.string,
	header: PropTypes.boolean,
	bold: PropTypes.boolean,
};

export default Link;
