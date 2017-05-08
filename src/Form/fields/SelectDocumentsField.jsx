import React, {Component} from 'react';
import Formsy from 'formsy-react';
import AddDocumentIcon from 'material-ui/svg-icons/action/note-add';
import DocumentIcon from 'material-ui/svg-icons/action/description';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import SelectDocumentsModal from "./SelectDocumentsModal";
import SelectDocumentsUploadModal from './SelectDocumentsUploadModal';
import './SelectDocumentsFieldStyle.scss';

const SelectDocumentsField = React.createClass({
	mixins: [Formsy.Mixin],

	getInitialState () {
		return {
			isModalOpen: false
		};
	},

	getDefaultProps(){
		return {
			defaultValue: [],
			name: '',
			value: [],
			selectedDocuments: [],
			isUploading: false,
			uploadingFiles: [
				// {
				// 	name: 'file.ext',
				// 	progress: 0
				// }
			],
			removeString: 'Remove',
			selectString: 'Select',
			uploadNewAreaString: 'Drag file or click here to select file',
			allowUpload: false,
			onSearchChange: (e) => {
			},
			onResetSearch: () => {
			},
			onChange: (value) => {
			},
			onSelectNewFiles: (files, returnDocumentIds) => {
			},
			labelKey: 'title',
			valueKey: '_id'
		};
	},

	onDocumentsUploaded(newDocumentIds){
		this.onChange([...this.props.value, ...newDocumentIds]);
	},

	onChange(value) {
		this.setValue(value);
		this.props.onChange(this.props.name, value);
	},

	render() {
		const {
			name, label, onSearchChange, documents, selectedDocuments, labelKey, valueKey,
			allowUpload, onSelectNewFiles, uploadingFiles, isUploading, onResetSearch,
			removeString, selectString,
		} = this.props;
		const {isModalOpen} = this.state;
		let value = this.getValue();

		if (value.length === 0) {
			value = this.props.value;
		}

		return <div className="select-documents-field">
			<div className="select-documents-field__label">
				{label}
			</div>
			<div className="select-documents-field__selected">
				{selectedDocuments && selectedDocuments.map((document, i) => (
					<div
						key={i}
						className="select-documents-field__selected__item"
					>
						<button
							type="button"
							onTouchTap={(e) => {
								this.onChange(value.filter((doc) => doc !== document[valueKey]));
							}}
							alt={removeString}
							className="select-documents-field__selected__item__remove-button"
						>
							<DeleteIcon
								style={{
									width: '18px'
								}}
								color="rgb(255, 64, 129)"
							/>
						</button>
						<DocumentIcon
							color="#868686"
						/>
						<div className="select-documents-field__selected__item__label">
							{document.title}
						</div>
					</div>
				))}

				<div
					className="select-documents-field__selected__item select-documents-field__selected__item--add-new"
				>
					<button
						type="button"
						onTouchTap={(e) => {
							e.preventDefault();

							this.setState({
								isModalOpen: true
							});

							onResetSearch();
						}}
						alt={selectString}
						className="select-documents-field__selected__item__button"
					/>
					<AddDocumentIcon
						color="#868686"
					/>
					<div className="select-documents-field__selected__item__label">
						{selectString}
					</div>
				</div>
			</div>

			{allowUpload && <div
				className="select-documents-field__upload-area"
				onDragOver={(e) => {
					e.stopPropagation();
					e.preventDefault();

					e.dataTransfer.dropEffect = 'copy';
				}}
				onDrop={(e) => {
					e.stopPropagation();
					e.preventDefault();

					let files = e.dataTransfer.files;

					if (files.length === 0) {
						return;
					}

					onSelectNewFiles(files, this.onDocumentsUploaded);
				}}
			>
				<button
					type="button"
					onTouchTap={() => {
						this.fileInputElement.click();
					}}
					className="select-documents-field__upload-area__button"
				>
					<input
						type="file"
						ref={(ref) => {
							this.fileInputElement = ref;
						}}
						onChange={(e) => {
							if (e.target.files.length === 0) {
								return;
							}

							onSelectNewFiles(e.target.files, this.onDocumentsUploaded);
						}}
						multiple={true}
						className="select-documents-field__upload-area__button__file-input"
					/>
				</button>
				<div className="select-documents-field__upload-area__label">
					{uploadNewAreaString}
				</div>
			</div>}

			{isModalOpen && <SelectDocumentsModal
				onRequestClose={() => {
					this.setState({
						isModalOpen: false
					});
				}}
				onSearchChange={onSearchChange}
				documents={documents}
				valueKey={valueKey}
				labelKey={labelKey}
				onClickDocument={(document, index, event) => {
					this.onChange([...value, document._id]);
					this.setState({
						isModalOpen: false
					});
				}}
			/>}

			{isUploading && <SelectDocumentsUploadModal
				files={uploadingFiles}
			/>}
		</div>;
	}
});

export default SelectDocumentsField;





