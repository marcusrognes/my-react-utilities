import React, {Component} from 'react';
import materialUiInterface from './materialUiInterface';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './FormStyle.scss';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			canSubmit: false,
			isDialogueOpen: false,
			dialogueTitle: '',
			dialogueDescription: '',
			dialogueAcceptLabel: 'Accept',
			dialogueDeclineLabel: 'Decline',
			dialogueAcceptAction: () => {
			}
		};
	}

	render() {
		let {
			canSubmit, isDialogueOpen, dialogueTitle, dialogueDescription,
			dialogueAcceptLabel, dialogueDeclineLabel, dialogueAcceptAction
		} = this.state;

		let {
			form,
			onSubmit,
			className,
			formInterface,
			displayForgotPasswordButton,
			forgotPasswordButtonLabel,
			onForgotPasswordClick,
			displayHelpButton,
			helpButtonLabel,
			onHelpClick,
			displayPrimaryButton,
			primaryButtonLabel,
			primaryButtonConfirm,
			displaySecondaryButton,
			onSecondaryAction,
			secondaryButtonLabel,
			secondaryButtonConfirm,
			style,
		} = this.props;

		return (
			<div className={'form ' + className}>
				<Formsy.Form
					ref={(ref) => {
						this.formElement = ref;
					}}
					onValidSubmit={(data, clear) => {
						if (primaryButtonConfirm) {
							this.setState({
								isDialogueOpen: true,
								dialogueTitle: primaryButtonConfirm.title,
								dialogueDescription: primaryButtonConfirm.description,
								dialogueAcceptLabel: primaryButtonConfirm.acceptLabel,
								dialogueDeclineLabel: primaryButtonConfirm.declineLabel,
								dialogueAcceptAction: () => {
									onSubmit(data, clear, this.formElement);
								}
							});
						} else {
							onSubmit(data, clear, this.formElement);
						}
					}}
					onValid={() => {
						this.setState({
							canSubmit: true
						});
					}}
					onInvalid={() => {
						this.setState({
							canSubmit: false
						});
					}}
				>
					<div className="form__elements">
						{form.map((e, i) => {
							let {type, element, match, ...values} = e;
							let {fieldType, ...defaults} = formInterface[type];

							let converter = formInterface.convert;

							let options = Object.assign({}, defaults, values, {
								key: i
							});

							if (type === 'custom') {
								return React.createElement(
									element,
									converter && converter(options) || options
								);
							}

							return React.createElement(
								fieldType,
								converter && converter(options) || options
							);
						})}
					</div>
					<div className="form__footer">
						<div className="form__footer__extra-buttons">
							{displayForgotPasswordButton && <a
								className="forgot-password-button"
								href="#!"
								onTouchTap={(e) => onForgotPasswordClick(e)}>{forgotPasswordButtonLabel}
							</a>}
							{displayHelpButton && <a
								className="help-button"
								href="#!"
								onTouchTap={(e) => onHelpClick(e)}>{helpButtonLabel}</a>}
						</div>
						{displayPrimaryButton && <RaisedButton
							label={primaryButtonLabel}
							primary={true}
							style={{
								float: 'right'
							}}
							disabled={!canSubmit}
							type="submit"
						/>}
						{displaySecondaryButton && <RaisedButton
							label={secondaryButtonLabel}
							secondary={true}
							style={{
								float: 'right',
								marginRight: '15px'
							}}
							type="button"
							onTouchTap={(e) => {
								e.preventDefault();
								e.stopPropagation();

								if (secondaryButtonConfirm) {
									this.setState({
										isDialogueOpen: true,
										dialogueTitle: secondaryButtonConfirm.title,
										dialogueDescription: secondaryButtonConfirm.description,
										dialogueAcceptLabel: secondaryButtonConfirm.acceptLabel,
										dialogueDeclineLabel: secondaryButtonConfirm.declineLabel,
										dialogueAcceptAction: () => {
											onSecondaryAction();
										}
									});
								} else {
									onSecondaryAction();
								}
							}}
							buttonStyle={{marginRight: '15px'}}
						/>}
						<div className="form__clear-fix"/>
					</div>
				</Formsy.Form>

				<Dialog
					open={isDialogueOpen}
					title={dialogueTitle}
					actions={[
						<FlatButton
							label={dialogueDeclineLabel}
							primary={true}
							onTouchTap={() => {
								this.setState({
									isDialogueOpen: false
								});
							}}
						/>,
						<FlatButton
							label={dialogueAcceptLabel}
							primary={true}
							keyboardFocused={true}
							onTouchTap={() => {
								this.setState({
									isDialogueOpen: false
								});

								dialogueAcceptAction();
							}}
						/>
					]}
				>
					{dialogueDescription}
				</Dialog>
			</div>
		);
	}
}

Form.defaultProps = {
	form: [],
	className: '',
	onSubmit: () => {
	},
	onSecondaryAction: () => {
	},
	formInterface: materialUiInterface,
	displayForgotPasswordButton: false,
	forgotPasswordButtonLabel: 'Forgot password?',
	displayHelpButton: false,
	helpButtonLabel: 'Need help?',
	displayPrimaryButton: true,
	primaryButtonLabel: 'Submit',
	primaryButtonConfirm: false,
	displaySecondaryButton: false,
	secondaryButtonLabel: 'Delete',
	secondaryButtonConfirm: {
		title: 'Test',
		description: 'Description',
		acceptLabel: 'Accept',
		declineLabel: 'Decline'
	},
};

export default Form;
