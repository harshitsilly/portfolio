import { setUrl } from '../../utils';
import SellTicket from './data/sellTicket.mdx';
import EDU from './data/EDU.mdx';
import Contributions from './data/contributions.mdx';

export const data = [
	{
		header: 'Electron Differential Updater',
		subDetail: 'Save download time and update size by upto 95%.',
		detail:
			'Open Source differential updater for Mac build on top of electron-builder. Minimise your update download by upto 95%. Preserve code signature and integrity.',
		imgUrl: setUrl('images/updater.webp'),
		type: 'open source',
		npm: {
			link: 'https://imjselectron.github.io/electron-differential-updater/#/',
			img: 'https://img.shields.io/npm/dm/@imjs/electron-differential-updater.svg',
		},
		github: 'https://github.com/imjsElectron/electron-differential-updater',
		content: <EDU />,
	},
	{
		header: 'React UI Library',
		subDetail: 'Welcome to modern React components',
		imgUrl: setUrl('images/react.webp'),
		type: 'open source',
		tag: 'upcoming',
	},
	{
		header: 'Contributions',
		subDetail: 'Open Source contributions to other projects',
		imgUrl: setUrl('images/openSource.webp'),
		type: 'open source',
		content: <Contributions />,
	},
	{
		header: 'SellTicket',
		subDetail: 'Buy/Resale ticket from one place.',
		imgUrl: setUrl('images/sellticket/sellticket5.webp'),
		type: 'showcase',
		images: [
			'images/sellticket/sellticket.webp',
			'images/sellticket/sellticket1.webp',
			'images/sellticket/sellticket2.webp',
			'images/sellticket/sellticket3.webp',
			'images/sellticket/sellticket4.webp',
		],
		link: '/mobile/sellTicket',
		github: 'https://github.com/harshitsilly/sell-ticket',
		content: <SellTicket />,
	},
];

{
	/* <Box direction="row" mDirection="row">
					<a href="https://npmjs.org/package/@imjs/electron-differential-updater" target="_blank">
						<img src="https://img.shields.io/npm/dm/@imjs/electron-differential-updater.svg" />
					</a>
					<a href="https://github.com/imjsElectron/electron-differential-updater" target="_blank"></a>
					{response?.stargazers_count}
				</Box> */
}
