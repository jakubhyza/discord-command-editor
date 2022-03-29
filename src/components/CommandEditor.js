import React, { Component } from 'react';
import testData from '../testdata.json';
import style from './CommandEditor.module.css';
import CommandNode from './CommandNode';

class CommandEditor extends Component {

	state = {
		commands: testData
	}

	handleChange = () => {
		this.forceUpdate();
	}

	render() {
		return (
			<div>
			<div className={style.CommandEditor}>
				{
					this.state.commands.filter(x=>(x.type ?? 1) === 1).map((command,index)=>(
						<CommandNode key={index} command={command} onChange={this.handleChange} />
					))
				}
			</div>
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