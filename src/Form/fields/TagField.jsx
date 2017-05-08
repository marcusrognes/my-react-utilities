import React, {Component} from 'react';
import Formsy from 'formsy-react';
import {WithContext as ReactTags} from 'react-tag-input';
import './TagFieldStyle.scss';

const TagField = React.createClass({
	mixins: [Formsy.Mixin],

	getInitialState(){
		return {
			tags: []
		};
	},

	getDefaultProps(){
		return {
			defaultValue: '',
			name: '',
			value: '',
			onChange: (name, value) => {
			}
		};
	},

	onChange(rawValue) {
		let value = false;

		if (rawValue.length > 0) {
			value = rawValue.map(v => v.text);
		}

		this.setValue(value);
		this.props.onChange(this.props.name, value);
	},

	handleDelete(i) {
		let tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({tags: tags});
		this.onChange(tags);
	},

	handleAddition(tag) {
		let tags = this.state.tags;
		tags.push({
			id: tags.length + 1,
			text: tag
		});
		this.setState({tags: tags});
		this.onChange(tags);
	},

	handleDrag(tag, currPos, newPos) {
		let tags = this.state.tags;

		// mutate array
		tags.splice(currPos, 1);
		tags.splice(newPos, 0, tag);

		// re-render
		this.setState({tags: tags});
		this.onChange(tags);
	},

	render() {
		const {tags, suggestions, addString} = this.state;
		const {label} = this.props;

		return <div
			className="tag-field"
		>
			<span
				className="tag-field__label"
			>
				{label}
			</span>
			<ReactTags
				tags={tags}
				placeholder={addString}
				suggestions={suggestions}
				handleDelete={this.handleDelete}
				handleAddition={this.handleAddition}
				handleDrag={this.handleDrag}
			/>
		</div>;
	}
});

TagField.defaultProps = {
	addString: 'Add tag'
};

export default TagField;





