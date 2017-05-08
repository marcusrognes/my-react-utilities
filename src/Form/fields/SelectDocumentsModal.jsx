import React, {Component} from 'react';
import BackIcon from 'material-ui/svg-icons/navigation/chevron-left';
import './SelectDocumentsModalStyle.scss';

class SelectDocumentsModal extends Component {
	componentDidMount() {
		this.inputElement.focus();
	}

	render() {
		const {
			onRequestClose, onSearchChange, documents, onClickDocument, labelKey,
			searchString,
		} = this.props;

		return <div
			className="select-documents-modal"
		>
			<div
				className="select-documents-modal__overlay"
				onTouchTap={onRequestClose}
			/>
			<div className="select-documents-modal__wrapper">
				<div className="select-documents-modal__wrapper__header">
					<button
						type="button"
						onTouchTap={onRequestClose}
						className="select-documents-modal__wrapper__header__back-button"
					>
						<BackIcon/>
					</button>
					<input
						ref={(ref) => {
							this.inputElement = ref;
						}}
						type="text"
						placeholder={searchString}
						className="select-documents-modal__wrapper__header__search-input"
						onChange={onSearchChange}
					/>
				</div>
				<div className="select-documents-modal__wrapper__content">
					{documents && documents.map((document, i) => (
						<div
							key={i}
							className="select-documents-modal__wrapper__content__item"
						>
							<button
								type="button"
								className="select-documents-modal__wrapper__content__item__button"
								alt={document[labelKey]}
								onTouchTap={(e) => onClickDocument(document, i, e)}
							/>
							<div className="select-documents-modal__wrapper__content__item__label">
								{document[labelKey]}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	}
}

SelectDocumentsModal.defaultProps = {
	title: 'Search',
	searchString: 'Search',
	onRequestClose: (e) => {
	},
	onSearchChange: (e) => {
	},
	labelKey: 'title',
	documents: [],
	onClickDocument: (document, i, e) => {
	},
};

export default SelectDocumentsModal;
