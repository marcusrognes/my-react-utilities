import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppScreen from '../src/AppScreen';
import AppBar from 'material-ui/AppBar';
import Form from '../src/Form';

const schema = [
	{
		label: 'Name',
		name: 'name',
		type: 'text',
		value: 'Test',
	},
	{
		label: 'Created at',
		name: 'createdAt',
		type: 'date',
		value: new Date(),
	}
];

storiesOf('Forms', module)
	.add('base', () => (
		<MuiThemeProvider>
			<AppScreen
				before={<AppBar title="Form"/>}
				contentStyle={{
					top: '64px'
				}}
			>
				<h1>
					Form
				</h1>
				<Form
					form={schema}
				/>
			</AppScreen>
		</MuiThemeProvider>
	));

