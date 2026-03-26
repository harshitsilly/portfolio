import { setUrl } from '../../utils';
import Saxo from './data/saxo.mdx';
import WD from './data/wd.mdx';
import Sap from './data/sap.mdx';
import Vymo from './data/vymo.mdx';
export const data = [
	{
		type: 'Work',
		data: [
			{
				name: 'Vymo',
				time: 'Jul 2022 - Jan 2026',
				index: 1,
				logo: setUrl('images/career/vymo.svg'),
				highlights: [
					'Led web-platform architecture with reusable micro-frontend modules and CI guardrails.',
					'Cut internal configuration-tool development effort by ~80% using AppBuilder workflows.',
					'Shipped production-grade Revyre BFF and VymoRAG integrations for faster delivery and knowledge retrieval.',
				],
				content: <Vymo />,
			},
			{
				name: 'SaxoBank Group',
				time: 'Apr 2021 - July 2022',
				index: 2,
				logo: setUrl('images/career/saxoLegacy.svg'),
				highlights: [
					'Owned charting, compliance, and product settings experiences across Saxo platforms.',
					'Drove micro-frontend adoption to improve reuse and reduce duplicated engineering effort.',
					'Refactored legacy React class components to hooks for maintainability and performance.',
				],
				content: <Saxo />,
			},
			{
				name: 'Western Digital Corporation',
				time: '11/2019 – 04/2021',
				index: 3,
				logo: setUrl('images/career/wd.jpeg'),
				highlights: [
					'Designed a VSCode-like modular extension architecture in EdgeRover to isolate extension lifecycle from the core Electron/Web app.',
					'Owned desktop packaging and release workflows for the EdgeRover desktop experience.',
					'Open-sourced electron-differential-updater for macOS, reducing update download size by up to 95%.',
				],
				content: <WD />,
			},
			{
				name: 'SAP Labs',
				time: '07/2015 – 11/2019',
				index: 4,
				logo: setUrl('images/career/sap.svg'),
				highlights: [
					'Reduced PBFC web app initial load time by ~15% by implementing PRPL methodology with Service Worker.',
					'Led a team of 3 UI developers and delivered 3 customer contracts during PBFC prototyping.',
					'Owned frontend development from design phase through production delivery across multiple projects.',
				],
				content: <Sap />,
			},
		],
	},
	{
		type: 'College',
		data: [{ name: 'Delhi College of Engineering', time: 'Aug 2011 - June 2015' }],
	},
];
