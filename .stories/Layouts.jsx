import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppScreen from '../src/AppScreen';
import AppBar from 'material-ui/AppBar';

storiesOf('App Layout', module)
	.add('Bare', () => (
		<AppScreen>
			<h1>
				App layout
			</h1>
			<div style={{
				padding: '20px'
			}}>
				<div style={{
					height: (window.innerHeight + 200) + 'px',
					width: '200px',
					background: 'red'
				}}/>
			</div>
		</AppScreen>
	))
	.add('With header', () => (
		<MuiThemeProvider>
			<AppScreen
				before={<AppBar title="With header"/>}
				contentStyle={{
					top: '64px'
				}}
			>
				<h1>
					App layout
				</h1>
				<div style={{
					padding: '20px'
				}}>
					<div style={{
						height: (window.innerHeight + 200) + 'px',
						width: '200px',
						background: 'red'
					}}/>
				</div>
			</AppScreen>
		</MuiThemeProvider>
	));
