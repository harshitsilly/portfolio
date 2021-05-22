import React from 'react';

import { storiesOf } from '@storybook/react';

import Text from './';

storiesOf('Text', module).add('Header', () => (
	<Text header bold>
		Test Data{' '}
	</Text>
));
