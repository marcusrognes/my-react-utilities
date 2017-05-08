import React, {Component} from 'react';
import Formsy from 'formsy-react';
import Dialog from 'material-ui/Dialog';
import './SelectModalFieldStyle.scss';

const SelectModalField = React.createClass({
	mixins: [Formsy.Mixin],

	getInitialState(){
		return {
			isModalOpen: true
		};
	},

	getDefaultProps(){
		return {
			name: '',
			value: '',
			defaultValue: '',
			onChange: (name, value) => {
			},
		};
	},

	onModalClose(){
		this.setState({
			isModalOpen: false
		});
	},

	onChange(value) {
		this.setValue(value);
		this.props.onChange(this.props.name, value);
	},

	render() {
		const {title, label} = this.props;

		const {isModalOpen} = this.state;

		return <div
			className="select-modal-field"
		>
			<span
				className="select-modal-field__label"
			>
				{label}
			</span>
			<div className="select-modal-field__modal">
				<Dialog
					title={title}
					modal={false}
					open={isModalOpen}
					onRequestClose={this.onModalClose}
				>
					The actions in this window were passed in as an array of React objects.
				</Dialog>
			</div>
		</div>;
	}
});

export default SelectModalField;
