import React, {Component} from 'react';
import './ModalScreenHeaderStyle.scss';

class ModalScreenHeader extends Component {
	render() {
		let {backButton, title, rootStyle, titleStyle, secondaryAction} = this.props;

		return <div
			className="modal-screen-header"
			style={rootStyle}
		>
			{backButton}
			{title && <div
				className="modal-screen-header__title"
				style={titleStyle}
			>
				{title}
			</div>}
			{secondaryAction}
		</div>
	};
}

ModalScreenHeader.defaultProps = {
	backButton: [],
	title: '',
	rootStyle: {},
	titleStyle: {},
	secondaryAction: []
};

export default ModalScreenHeader;
