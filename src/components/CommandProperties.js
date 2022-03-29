import React, {Component} from "react";

class CommandProperties extends Component
{
    handlePropertyChange = ev => {
        this.props.command[ev.target.name] = ev.target.value;
        this.forceUpdate();
    }

    render()
    {
        return(
            <div>
                <h2>Edit Command</h2>
                <label>Command name</label>
                <input type="text" name="name" value={this.props.command.name} onChange={this.handlePropertyChange} />
                <label>Command description</label>
                <input type="text" name="description" value={this.props.command.description} onChange={this.handlePropertyChange} />
            </div>
        );
    }
}
export default CommandProperties;