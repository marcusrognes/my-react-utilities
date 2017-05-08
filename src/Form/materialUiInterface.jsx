import React from 'react';
import {
	FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
	FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete
} from 'formsy-material-ui/lib';
import FileField from './fields/FileField';
import TagField from './fields/TagField';
import MenuItem from 'material-ui/MenuItem';

const materialUiInterface = {
	text: {
		fieldType: FormsyText,
		fullWidth: true
	},
	password: {
		fieldType: FormsyText,
		fullWidth: true,
		type: 'password'
	},
	textarea: {
		fieldType: FormsyText,
		multiLine: true,
		fullWidth: true,
		rows: 4,
		rowsMax: 24
	},
	tags: {
		fieldType: TagField,
	},
	radio: {
		fieldType: FormsyRadio,
		fullWidth: true
	},
	checkbox: {
		fieldType: FormsyCheckbox
	},
	file: {
		fieldType: FileField
	},
	date: {
		fieldType: FormsyDate,
		fullWidth: true
	},
	radioGroup: {
		fieldType: FormsyRadioGroup,
		fullWidth: true
	},
	select: {
		fieldType: FormsySelect,
		fullWidth: true
	},
	time: {
		fieldType: FormsyTime,
		format: '24hr',
		fullWidth: true
	},
	toggle: {
		fieldType: FormsyToggle,
	},
	autoComplete: {
		fieldType: FormsyAutoComplete,
		fullWidth: true
	},
	custom: {},
	_generateChildren: (options) => {
		return options.options && Object.keys(options.options).map((o, i) => <MenuItem
				key={i}
				value={o}
				primaryText={options.options[o]}
			/>);
	},
	convert: (settings) => {
		let {label, options, ...values} = settings;

		return Object.assign({}, values, {
			floatingLabelText: label,
			label: label,
			children: materialUiInterface._generateChildren(settings)
		});
	}
};

export default materialUiInterface;
