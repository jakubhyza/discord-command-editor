import React, { Component } from 'react';
import testData from '../testdata.json';
import style from './CommandEditor.module.css';
import CommandNode from './CommandNode';

class CommandEditor extends Component {

	state = {
		commands: testData
	}

	render() {
		return (
			<div>
			<div className={style.CommandEditor}>
				{
					this.state.commands.map((command,index)=>(
						<CommandNode key={index} command={command} />
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