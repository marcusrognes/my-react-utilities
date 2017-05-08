import React, {Component} from 'react';
import './TableStyle.scss';

class Table extends Component {
	render() {
		const {schema, data, hideHeader, className, onClickElement} = this.props;

		return <div
			className={'table ' + className}
		>
			{!hideHeader && <div
				className="table__header"
			>
				{schema.map((s, hi) => <div
					key={hi}
					style={s.style}
					className="table__header__element table__cell"
				>
					{s.label}
				</div>)}
			</div>}

			{data.map((d, di) => <a
				key={di}
				href="#"
				onTouchTap={(e) => {
					e.preventDefault();

					onClickElement(d);
				}}
				className="table__row"
			>
				{schema.map((s, si) => <div
					key={si}
					style={s.style}
					className={'table__row__element table__cell ' + (s.className || '')}
				>
					{s.convert && s.convert(d[s.name]) || d[s.name]}
				</div>)}
			</a>)}
		</div>;
	}
}

Table.defaultProps = {
	schema: [],
	data: [],
	hideHeader: false,
	className: '',
	onClickElement: (element) => {
	},
};

export default Table;
