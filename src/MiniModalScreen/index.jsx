import React, {Component} from 'react';
import './MiniModalScreenStyle.scss';

class MiniModalScreen extends Component {
	render() {
		let {rootStyle, wrapperStyle, contentStyle, before, children, after, onScroll} = this.props;

		return <div
			className="mini-modal-screen"
			style={rootStyle}
		>
			<div
				className="mini-modal-screen__overlay"
			/>
			<div
				className="mini-modal-screen__wrapper"
				style={wrapperStyle}
			>
				{before}
				<div
					className="mini-modal-screen__wrapper__content"
					style={contentStyle}
					onScroll={onScroll}
				>
					{children}
				</div>
				{after}
			</div>
		</div>
	};
}

MiniModalScreen.defaultProps = {
	rootStyle: {},
	wrapperStyle: {},
	contentStyle: {},
	before: [],
	children: [],
	after: [],
	onScroll: (e) => {
	},
};

export default MiniModalScreen;
