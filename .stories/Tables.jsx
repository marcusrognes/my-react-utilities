import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppScreen from '../src/AppScreen';
import AppBar from 'material-ui/AppBar';
import Table from "../src/Table";

const schema = [
	{
		label: 'Name',
		name: 'name',
		width: '60%',
	},
	{
		label: 'Created at',
		name: 'createdAt',
		convert: (value) => {
			return value.getDate() + ' ' + (value.getMonth() + 1) + ' ' + value.getFullYear();
		},
	}
];

const data = [
	{
		name: 'Test 1',
		createdAt: new Date(),
	},
	{
		name: 'Test 2',
		createdAt: new Date(),
	},
	{
		name: 'Test 3',
		createdAt: new Date(),
	},
	{
		name: 'Test 4',
		createdAt: new Date(),
	},
	{
		name: 'Test 5',
		createdAt: new Date(),
	},
];

storiesOf('Table', module)
	.add('with header', () => (
		<MuiThemeProvider>
			<AppScreen
				before={<AppBar title="Table"/>}
				contentStyle={{
					top: '64px'
				}}
			>
				<h1>
					Table
				</h1>
				<Table
					schema={schema}
					data={data}
				/>
			</AppScreen>
		</MuiThemeProvider>
	));

