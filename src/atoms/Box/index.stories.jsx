import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from './';

storiesOf('Box', module).add('flex row', () => (
	<Box>
		<Box>Test Data </Box>
	</Box>
));
