import React, {Component} from 'react';
import './AppScreenStyle.scss';

class AppScreen extends Component {
	render() {
		let {rootStyle, contentStyle, before, children, after, onScroll} = this.props;

		return <div
			className="app-screen"
			style={rootStyle}
		>
			{before}
			<div
				className="app-screen__content"
				style={contentStyle}
				onScroll={onScroll}
			>
				{children}
			</div>
			{after}
		</div>
	};
}

AppScreen.defaultProps = {
	rootStyle: {},
	contentStyle: {},
	before: [],
	children: [],
	after: [],
	onScroll: (e) => {
	},
};

export default AppScreen;
