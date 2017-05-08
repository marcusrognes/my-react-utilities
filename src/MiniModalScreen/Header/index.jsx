import React, {Component} from 'react';
import './MiniModalScreenHeaderStyle.scss';

class MiniModalScreenHeader extends Component {
	render() {
		let {backButton, title, rootStyle, titleStyle, secondaryAction} = this.props;

		return <div
			className="mini-modal-screen-header"
			style={rootStyle}
		>
			{backButton}
			{title && <div
				className="mini-modal-screen-header__title"
				style={titleStyle}
			>
				{title}
			</div>}
			{secondaryAction}
		</div>
	};
}

MiniModalScreenHeader.defaultProps = {
	backButton: [],
	title: '',
	rootStyle: {},
	titleStyle: {},
	secondaryAction: []
};

export default MiniModalScreenHeader;
