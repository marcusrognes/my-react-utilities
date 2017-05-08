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
		label: 'Password',
		name: 'password',
		type: 'password',
		value: 'Test',
	},
	{
		label: 'Textarea',
		name: 'textarea',
		type: 'textarea',
		value: 'Test',
	},
	{
		label: 'Tags',
		name: 'tags',
		type: 'tags',
		value: ['Tag 1', 'Tag 2'],
	},
	{
		label: 'Style',
		name: 'name',
		type: 'text',
		value: 'Half width',
		style: {
			width: '50%'
		},
	},
	{
		label: 'Style',
		name: 'name',
		type: 'text',
		value: 'Half width',
		style: {
			width: '50%'
		},
	},
	{
		label: 'Created at',
		name: 'createdAt',
		type: 'date',
		value: new Date(),
	},
	{
		label: 'Select modal',
		name: 'selectModal',
		type: 'selectModal',
		title: 'Test data',
		value: [],
	},
	{
		label: 'Time',
		name: 'time',
		type: 'time',
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

