import React, { Component } from 'react';
import Modal from '../Modal';
import CommandProperties from './CommandProperties';

class NewCommandNode extends Component {

	state = {
		expanded: false,
		newCommand: {}
	}

	openModal = () => {
		this.setState({
			expanded: true,
			newCommand: {}
		});
	}

	closeModal = () => {
		this.setState({
			expanded: false
		})
	}

	save = () => {
		this.props.submitCommand(this.state.newCommand);
		this.closeModal();
	}

	render() {
		return (
			<div style={{
				overflow: 'hidden',
			}}>
				<button className='float-right' onClick={this.openModal}>
					Create New Command
				</button>
				{
					this.state.expanded &&
					<Modal close={this.closeModal}>
						<CommandProperties command={this.state.newCommand} closeModal={this.closeModal} onSubmit={this.save} cancelable />
					</Modal>
				}
			</div>
		);
	}
}

export default NewCommandNode;