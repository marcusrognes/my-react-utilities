import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';
import './SelectDocumentsUploadModalStyle.scss';

class SelectDocumentsUploadModal extends Component {
	render() {
		let {files, title} = this.props;

		return <Dialog
			title={title}
			modal={true}
			open={true}
			autoScrollBodyContent={true}
		>
			<div className="select-document-upload-modal">
				{files.map((f, i) => (
					<div className="select-document-upload-modal__element">
						<div className="select-document-upload-modal__element__name">
							{f.name}
						</div>
						<div className="select-document-upload-modal__element__progress">
							<LinearProgress mode="determinate" value={f.progress}/>
						</div>
					</div>
				))}
			</div>
		</Dialog>;
	}
}

SelectDocumentsUploadModal.defaultProps = {
	title: 'Upload multiple files'
};

export default SelectDocumentsUploadModal;
