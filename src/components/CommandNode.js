import React, { Component } from 'react';
import style from './CommandNode.module.css';
import propTypes from 'prop-types';
import Modal from '../Modal';

/*

Application Command Types
CHAT_INPUT = 1
USER       = 2
MESSAGE    = 3

*/

class CommandNode extends Component {

	state = {
		showModal: false
	}

	showModal = () => {
		this.setState({
			showModal: true
		});
	}

	closeModal = () => {
		this.setState({
			showModal: false
		});
	}

	render() {
		return (
			<div>
				<div className={style.CommandNode} onClick={this.showModal}>
					{
						(this.props.command.type ?? 1) === 1 && 
						<span className={style.Command}>{'/' + this.props.command.name}</span>
					}
					{
						this.props.command.type === 2 &&
						<span>user{'>'} <span className={style.Command}>{this.props.command.name}</span></span>
					}
					{
						this.props.command.type === 3 &&
						<span>msg{'>'} <span className={style.Command}>{this.props.command.name}</span></span>
					}
					<span className={style.Description}>{this.props.command.description}</span>
				</div>
				{
					this.state.showModal &&
					<Modal close={this.closeModal}>
						Modal content
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