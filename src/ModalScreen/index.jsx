import React, {Component} from 'react';
import './ModalScreenStyle.scss';

class ModalScreen extends Component {
	render() {
		let {rootStyle, wrapperStyle, contentStyle, before, children, after, onScroll} = this.props;

		return <div
			className="modal-screen"
			style={rootStyle}
		>
			<div
				className="modal-screen__overlay"
			/>
			<div
				className="modal-screen__wrapper"
				style={wrapperStyle}
			>
				{before}
				<div
					className="modal-screen__wrapper__content"
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

ModalScreen.defaultProps = {
	rootStyle: {},
	wrapperStyle: {},
	contentStyle: {},
	before: [],
	children: [],
	after: [],
	onScroll: (e) => {
	},
};

export default ModalScreen;
