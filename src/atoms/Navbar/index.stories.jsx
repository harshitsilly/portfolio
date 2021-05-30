import React from 'react';

import { storiesOf } from '@storybook/react';

import Navbar from './';
import Box from '../Box';

storiesOf('Navbar', module).add('Navbar', () => (
	<Navbar title="Welcome" padH="20px">
		<Box>Test</Box>
		<Box>Contact</Box>
		<Box>Blog</Box>
	</Navbar>
));
