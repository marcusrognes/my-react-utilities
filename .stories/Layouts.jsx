import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppScreen from '../src/AppScreen';
import ModalScreen from '../src/ModalScreen';
import AppBar from 'material-ui/AppBar';
import ModalScreenHeader from '../src/ModalScreen/Header';
import {IconButton} from "material-ui";
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import MiniModalScreen from "../src/MiniModalScreen";
import MiniModalScreenHeader from "../src/MiniModalScreen/Header";

storiesOf('App screen', module)
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


storiesOf('Modal screen', module)
	.add('Bare', () => (
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
				<ModalScreen>
					<h3>
						This is in a modal screen!
					</h3>
					<div style={{
						padding: '20px'
					}}>
						<div style={{
							height: (window.innerHeight + 200) + 'px',
							width: '200px',
							background: 'red'
						}}/>
					</div>
				</ModalScreen>
			</AppScreen>
		</MuiThemeProvider>
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
				<ModalScreen
					before={<ModalScreenHeader
						backButton={<IconButton
							style={{
								width: '64px',
								height: '64px'
							}}
						>
							<CloseIcon/>
						</IconButton>}
						title="With header"
					/>}
					contentStyle={{
						top: '64px'
					}}
				>
					<h3>
						This is in a modal screen!
					</h3>
					<div style={{
						padding: '20px'
					}}>
						<div style={{
							height: (window.innerHeight + 200) + 'px',
							width: '200px',
							background: 'red'
						}}/>
					</div>
				</ModalScreen>
			</AppScreen>
		</MuiThemeProvider>
	));


storiesOf('Mini Modal screen', module)
	.add('Bare', () => (
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
				<MiniModalScreen>
					<h3>
						This is in a modal screen!
					</h3>
					<div style={{
						padding: '20px'
					}}>
						<div style={{
							height: (window.innerHeight + 200) + 'px',
							width: '200px',
							background: 'red'
						}}/>
					</div>
				</MiniModalScreen>
			</AppScreen>
		</MuiThemeProvider>
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
				<MiniModalScreen
					before={<MiniModalScreenHeader
						backButton={<IconButton
							style={{
								width: '64px',
								height: '64px'
							}}
						>
							<CloseIcon/>
						</IconButton>}
						title="With header"
					/>}
					contentStyle={{
						top: '64px'
					}}
				>
					<h3>
						This is in a modal screen!
					</h3>
					<div style={{
						padding: '20px'
					}}>
						<div style={{
							height: (window.innerHeight + 200) + 'px',
							width: '200px',
							background: 'red'
						}}/>
					</div>
				</MiniModalScreen>
			</AppScreen>
		</MuiThemeProvider>
	));

