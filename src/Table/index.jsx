import React, {Component} from 'react';
import './TableStyle.scss';

class Table extends Component {
	render() {
		const {schema, data, hideHeader, className} = this.props;

		return <div
			className={'table ' + className}
		>
			{!hideHeader && <div
				className="table__header"
			>
				{schema.map((s, hi) => <div
					key={hi}
					style={{
						width: s.width
					}}
					className="table__header__element table__cell"
				>
					{s.label}
				</div>)}
			</div>}

			{data.map((d, di) => <div
				key={di}
				className="table__row"
			>
				{schema.map((s, si) => <div
					key={si}
					style={{
						width: s.width
					}}
					className={'table__row__element table__cell ' + (s.className || '')}
				>
					{s.convert && s.convert(d[s.name]) || d[s.name]}
				</div>)}
			</div>)}
		</div>;
	}
}

Table.defaultProps = {
	schema: [],
	data: [],
	hideHeader: false,
	className: '',
};

export default Table;
