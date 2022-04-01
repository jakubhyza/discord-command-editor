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
					Editor for type {Object.keys(CommandOptionType).find(key=>CommandOptionType[key] === this.props.option.type )  } is not implemented yet.
				</div>
			);
		}
	}
}

export default CommandOption;