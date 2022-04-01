import React, { Component } from 'react';
import testData from '../testdata.json';
import style from './CommandEditor.module.css';
import CommandNode from './CommandNode';
import NewCommandNode from './NewCommandNode';

class CommandEditor extends Component {

	state = {
		commands: testData,
		error: null
	}

	handleChange = () => {
		this.validateConfig();
	}

	newCommand = command => {
		let cmds = this.state.commands;
		cmds.push(command);
		this.setState({
			commands: cmds
		});
	}

	removeCommand = command => {
		let cmds = this.state.commands;
		cmds = cmds.filter(x=>x !== command);
		this.setState({
			commands: cmds
		});
	}

	validateConfig = () => {
		let error = null;

		this.state.commands.forEach(command=>{
			// Two commands cannot have the same name
			let names = this.state.commands.filter(x=>x.name === command.name);
			if (names.length > 1)
			{
				error = `Two commands cannot have the same name: ${command.name}`
			}
		})

		this.setState({
			error: error
		});
	}

	render() {
		return (
			<div>
				{
					this.state.error != null &&
					<div className="error-line">
						<b>{this.state.error}</b>
					</div>
				}
				<div className={style.CommandEditor}>
					{
						this.state.commands.filter(x=>(x.type ?? 1) === 1).map((command,index)=>(
							<CommandNode key={index} command={command} onChange={this.handleChange} remove={this.removeCommand} />
						))
					}
				</div>
				<NewCommandNode submitCommand={this.newCommand} />
				<hr />
				Input/Output:<br />
				<textarea
					style={{width:'100%',height:'70vh'}}
					value={JSON.stringify(this.state.commands,null,2)}
					onChange={()=>{
						this.setState({
							commands: JSON.parse(document.querySelector('textarea').value)
						});
					}}
				/>
			</div>
		);
	}
}

export default CommandEditor;