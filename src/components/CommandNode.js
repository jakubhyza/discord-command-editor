import React, { Component } from 'react';
import style from './CommandNode.module.css';
import propTypes from 'prop-types';
import Modal from '../Modal';
import CommandProperties from './CommandProperties';


const CommandType = {
	CHAT_INPUT: 1,
	USER: 2,
	MESSAGE: 3
}

class CommandNode extends Component {

	state = {
		showModal: false
	}

	showModal = () => {
		this.setState({
			showModal: true
		});
	}

	closeModal = (e) => {
		if (e !== undefined)
			e.preventDefault();

		this.setState({
			showModal: false
		});
	}

	remove = (e) => {
		if (e !== undefined)
			e.preventDefault();

		if (window.confirm("Are you sure you want to delete `" + this.props.command.name + "` command?"))
		{
			this.closeModal();
			this.props.remove(this.props.command);
		}
	}

	render() {
		return (
			<div>
				<div className={style.CommandNode} onClick={this.showModal}>
					{
						(this.props.command.type ?? CommandType.CHAT_INPUT) === CommandType.CHAT_INPUT && 
						<span className={style.Command}>{'/' + this.props.command.name}</span>
					}
					{
						this.props.command.type === CommandType.USER &&
						<span>user{'>'} <span className={style.Command}>{this.props.command.name}</span></span>
					}
					{
						this.props.command.type === CommandType.MESSAGE &&
						<span>msg{'>'} <span className={style.Command}>{this.props.command.name}</span></span>
					}
					<span className={style.Description}>{this.props.command.description}</span>
				</div>
				{
					this.state.showModal &&
					<Modal>
						<CommandProperties command={this.props.command} closeModal={this.closeModal} onChange={this.props.onChange} delete={this.remove} />
					</Modal>
				}
			</div>
		);
	}
}
CommandNode.propTypes = {
	command: propTypes.object.isRequired
}


export default CommandNode;