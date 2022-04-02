import React, { Component } from 'react';
import style from './CommandOption.module.css';

const CommandOptionType = {
	SUB_COMMAND: 1,
	SUB_COMMAND_GROUP: 2,
	STRING: 3,
	INTEGER: 4,
	BOOLEAN: 5,
	USER: 6,
	CHANNEL: 7,
	ROLE: 8,
	MENTIONABLE: 9,
	NUMBER: 10,
	ATTACHMENT: 11
}

class CommandOption extends Component {

	state = {
		editMode: false
	}

	openEditor = () => {
		this.setState({
			editMode: true
		});
	}

	handleChange = (e) => {
		let dataType = e.target.getAttribute('data-type');
		if (dataType === 'int')
		{
			this.props.option[e.target.name] = parseInt(e.target.value);
		}
		else
		{
			this.props.option[e.target.name] = e.target.value;
		}

		this.props.onChange(this.props.option);
	}

	render() {
		if (!this.state.editMode)
		{
			return (
				<div className={style.View} onClick={this.openEditor}>
					<span className={style.Name}>
						{this.props.option.name}
					</span>
					<span className={style.Type}>
						{Object.keys(CommandOptionType).find(key=>CommandOptionType[key] === this.props.option.type )}
					</span>
					{
						this.props.option.required &&
						<span className={style.Required}>
							Required
						</span>
					}
						
				</div>
			);
		}
		else
		{
			return (
				<div className={style.Editor}>
					<div className='error-line'>
						Option editor is not fully implemented yet.
					</div>
					<div className={style.Name}>
						<label>Option Name</label>
						<input placeholder='1 - 32 letters, np spaces' type="text" name="name" value={this.props.option.name ?? ""} onChange={this.handleChange} minLength={1} maxLength={32} pattern="^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$" required />
					</div>
					<div className={style.Type}>
						<label>Option Type</label>
						<select name="type" value={this.props.option.type ?? ""} data-type="int" onChange={this.handleChange} required>
						{
							Object.keys(CommandOptionType).map(key=>(
								<option key={key} value={CommandOptionType[key]}>{key}</option>
							))
						}
						</select>
					</div>
					<div className={style.Description}>
						<label>Option Description</label>
					</div>
					<div className={style.Required}>

					</div>
				</div>
			);
		}
	}
}

export default CommandOption;