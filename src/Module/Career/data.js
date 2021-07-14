import { setUrl } from '../../utils';
import Saxo from './data/saxo.mdx';

export const data = [
	{
		type: 'Work',
		data: [
			{ name: 'SaxoBank Group', time: 'Apr 2021 - Present', index: 3, logo: setUrl('images/career/saxo.svg'), content: <Saxo /> },
			{ name: 'Western Digital', time: 'Nov 2019 - Apr 2021', index: 2, logo: setUrl('images/career/wd.svg') },
			{ name: 'Sap Labs', time: 'Aug 2015 - Nov 2019', index: 1, logo: setUrl('images/career/sap.svg') },
		],
	},
	{
		type: 'College',
		data: [{ name: 'Delhi College of Engineering', time: 'Aug 2011 - June 2015' }],
	},
];
