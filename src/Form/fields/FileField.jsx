import React, {Component} from 'react';
import Formsy from 'formsy-react';
import TextField from 'material-ui/TextField';
import {RaisedButton} from "material-ui";

const FileField = React.createClass({
	mixins: [Formsy.Mixin],

	getDefaultProps(){
		return {
			defaultValue: '',
			name: '',
			value: '',
			onChange: (files, value) => {
			}
		};
	},

	onChange(e) {
		let target = e.currentTarget;
		let value = target.value;

		let files = target.files;

		if (files.length === 0) {
			files = undefined;
		}

		this.setValue(files);
		this.props.onChange(this.props.name, files, value);
	},

	render() {
		const {name, label} = this.props;

		return <RaisedButton
			containerElement="label"
			style={{
				width: '100%'
			}}
			label={label}
		>
			<input
				ref={(ref) => {
					this.element = ref;
				}}
				type="file"
				name={name}
				onChange={(e) => this.onChange(e)}
			/>
		</RaisedButton>;
	}
});

export default FileField;





