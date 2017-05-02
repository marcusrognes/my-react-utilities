import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';

storiesOf('Layout', module)
	.add('Logged in', () => (
		<div>
			<h1>
				Logged in!
			</h1>
		</div>
	));
